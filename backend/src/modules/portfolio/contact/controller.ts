import { general } from '../../../config/general';
import { Request, Response } from 'express';
import { IQueryResponse } from '../../../interfaces/postgres_responses';
import { IContact } from './helper';
import { contactModel } from './model'
import { mailer } from '../../../config/main';

class ContactController{
    
    public create= async (req: Request, res: Response): Promise<void> => {
        
        /**  campo de entrada de body */

        const { name,mail,subject,message }: IContact = req.body;
        
        /**  fin campo de entrada de body */

       
        /** validaciones de campo de entradas */

        if(!general.validateData("string",name,1,0,false)){
            res.status(200).json({
                code:0,
                message:"Validar nombre." 
            });
            return;
        }

        if(!general.validateData("mail",mail,1,0,false)){
            res.status(200).json({
                code:0,
                message:"Validar Correo." 
            });
            return;
        }

        if(!general.validateData("string",subject,1,0,false)){
            res.status(200).json({
                code:0,
                message:"Validar Asunto." 
            });
            return;
        }

        /** fin validaciones de campo de entradas */
        try {

            const response: IQueryResponse =await contactModel.create(req.body);
            if(response.ok){
                var to="emiliocaraballo9810@gmail.com";
                var replay="";
                mailer.smart_main(String(process.env.NOMBRE_PROYECTO),'Contacto - '+process.env.NOMBRE_PROYECTO,`<p>${name}<br>${mail}<br>${subject}<br>${message}</p>`,to,replay);
                res.status(200).json({
                    code:1,
                    data: response.data,
                    message:"Su solicitud ha sido generada con éxito."
                });
            }
        } catch (error) {
            
        }        
    }
}
export const contactController = new ContactController;