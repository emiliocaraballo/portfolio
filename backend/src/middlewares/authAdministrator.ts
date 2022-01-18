import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../modules/administrator/user/helper';
import { general } from '../config/general';
import { usersModel } from '../modules/administrator/user/model';


class AuthController {
    // crear token
    public generateToken = async (user: IUser,ip:string,browser?:string | undefined,sistemaname?:string | undefined,sistemaversion?:string | undefined) => {
        
        var hast_dispositivo=await general.encriptarBcrypt(ip+browser+sistemaname+sistemaversion);
        
        return jwt.sign({
            email: user.email,
            role: user.role,
            token: hast_dispositivo,
            id: user.id,
            profile:user.profile,
            user:{
                name: user.name,
                last_name: user.last_name,
                identification: user.identification,
                phone: user.phone,
                gender: user.gender,
                email: user.email,
                updated_at:user.updated_at
            }
        },
            process.env.TOKEN_KEY + '',
            {
                expiresIn: process.env.TOKEN_DURATION
            }
        );
    }

    // validar token sin role
    public validateToken = (req: Request, res: Response, next: NextFunction) => {
        try {
        const UserAgent=general.UserAgent(req.header("User-Agent"));
        const ip=req.ip;
        var browser=UserAgent.browser;
        var sistemaname=UserAgent.sistema.name;
        var sistemaversion=UserAgent.sistema.version;

        const token: string = req.headers.authorization + '';
        
        
        return jwt.verify(token, process.env.TOKEN_KEY + '', async (err) => {
            
            if (err) return res.status(401).json({
                code: -2,
                message: 'Token Invalido'
            });
            console.log(token);

            try {
                var dataSession=await this.validateSession(token,String(req.headers.id));
                if(dataSession.code!=1){
                    res.status(401).json(dataSession);
                    return;
                }
            } catch (error) {
                res.status(401).json({
                    code:-2,
                    message: 'Token Invalido'
                });
                return;
            }
            
            
            

            const user: IUser = jwt_decode(token);
            const toke_aux=user.token as string;

            general.compararBcrypt(ip+browser+sistemaname+sistemaversion,toke_aux).then((response)=>{

                if(!response){
                    return res.status(401).json({
                        code: -2,
                        message: 'Token Invalido'
                    });
                }

                // if (user.role !== 2) if (user.role !== 0) return res.status(401).json({
                //     code: false,
                //     message: 'insufficient privileges'
                // });
                if(response){
                    req.body.user = user;
                }
                next();
            }).catch(()=>{
                return res.status(401).json({
                    code: -2,
                    message: 'Token Invalido'
                });
            }); 
        });
            
        } catch (error) {
            
        }
        res.status(401).json({
            code:-2,
            message:"",
        })
    }

    //validar token con roles superiores a 0.
    public validateAdminBasicToken = (req: Request, res: Response, next: NextFunction) => {

        try {

            const UserAgent=general.UserAgent(req.header("User-Agent"));
            const ip=req.ip;
            var browser=UserAgent.browser;
            var sistemaname=UserAgent.sistema.name;
            var sistemaversion=UserAgent.sistema.version;
            const token: string = req.headers.authorization + '';
            
            return jwt.verify(token, process.env.TOKEN_KEY + '', async (err) => {
                if (err) return res.status(401).json({
                    code:-2,
                    message: 'Token Invalido'
                });

                try {
                    var dataSession=await this.validateSession(token,String(req.headers.id));
                    if(dataSession.code!=1){
                        res.status(401).json(dataSession);
                        return;
                    }
                } catch (error) {
                    res.status(401).json({
                        code:-2,
                        message: 'Token Invalido'
                    });
                    return;
                }
    
                const user: IUser = jwt_decode(token);
                const toke_aux=user.token as string;
                if (user.role !== 2) if (user.role !== 1)  return res.status(401).json({
                    code:-2,
                    message: 'insufficient privileges'
                });
    
                general.compararBcrypt(ip+browser+sistemaname+sistemaversion,toke_aux).then((response)=>{
                    if(!response){
                        return res.status(401).json({
                            code: -2,
                            message: 'Token Invalido'
                        });
                    }
                    if(response){
                        req.body.user = user;
                    }
                    next();
                });
            });
            
        } catch (error) {
            
        }
        res.status(401).json({
            code:-2,
            message:"",
        })
    }

    //validar token con rol 2 que es super administrador.
    public validateAdminToken = (req: Request, res: Response, next: NextFunction) => {
        
        try {
            const UserAgent=general.UserAgent(req.header("User-Agent"));
        const ip=req.ip;
        var browser=UserAgent.browser;
        var sistemaname=UserAgent.sistema.name;
        var sistemaversion=UserAgent.sistema.version;
        const token: string = req.headers.authorization + '';

        return jwt.verify(token, process.env.TOKEN_KEY + '', async (err) => {
            if (err) return res.status(401).json({
                code:-2,
                message: 'Token Invalido'
            });

            
            try {
                var dataSession=await this.validateSession(token,String(req.headers.id));
                if(dataSession.code!=1){
                    res.status(401).json(dataSession);
                    return;
                }
            } catch (error) {
                res.status(401).json({
                    code:-2,
                    message: 'Token Invalido'
                });
                return;
            }

            const user: IUser = jwt_decode(token);
            const toke_aux=user.token as string;
            if (user.role !== 2)  return res.status(401).json({
                code:-2,
                message: 'insufficient privileges'
            });

            general.compararBcrypt(ip+browser+sistemaname+sistemaversion,toke_aux).then((response)=>{
                if(!response){
                    return res.status(401).json({
                        code: -2,
                        message: 'Token Invalido'
                    });
                }
                if(response){
                    req.body.user = user;
                }
                next();
            });
        });
        } catch (error) {
            
        }
        res.status(401).json({
            code:-2,
            message:"",
        })
    }


    public validateSession=async(token:string,id_session:string)=>{
                if (id_session=="undefined"){
                    return {code:-2,message:"Token Invalido #1"}
                }
                try {
                   var response=await usersModel.getSesionId(id_session,token);
                        if(response.ok==true){
                            if(response.data.status==0){
                                return {code:-2,message:'Token expirado'}
                            }else{
                                const data=await usersModel.getSesionActive(id_session,general.dateNow());
                                if(!data.ok){
                                    return {code:-2,message:'Token Invalido'}
                                }else{
                                    return {code:1,message:''}
                                }
                            }
                        }
                } catch (error) {
                   
                }
                return {code:-2,message:'Token Invalido'}
    }
}
export const authController: AuthController = new AuthController;