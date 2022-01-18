
import parser from 'ua-parser-js';
import bcrypt from 'bcryptjs';
import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import moment from 'moment';
import jwt_decode from 'jwt-decode';

// una vez en produccion ya no se puede cambiar el numero.
var BCRYPT_SALT_ROUNDS = 10;

class General{
    /*
        string,
        numero,
        real,
        mail,
        url,
        password minimo 8 por lo meno una letra en miniscula y tambien en mayuscula y numero,
        date,
        datetime,
        time

        mime imagen,video
    */
    public validateData=(type:string,str:string | undefined,lengthmin=0,lengthmax=0,status=false)=>{
        // siempre mejora esta funcion
        var message="";
        var regExp;
        var res=true;

        str=String(str);
        if(str=="undefined"){
            str="";
        }
        
        switch(type) {
            case 'string': { 
                regExp = new RegExp(/^[a-zA-Z0-9ñÑáàäâÁÀÂÄéèëêÉÈÊËÊíìïîÍÌÏÎóòöôÓÒÖÔÓúùüûÚÙÛÜç°,;()Ç?:@+-_#.~"' \s]+$/g);
                res = regExp.test(str);
               break; 
            }
            case 'mail': { 
                regExp = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
                res = regExp.test(str);
               break; 
            } 
            case 'number': { 
                regExp = new RegExp(/^[0-9]+$/g);
                res = regExp.test(str);
               break; 
            } 
            case 'url': { 
                regExp =  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                res = regExp.test(str);
               break; 
            } 
            case 'real': { 
                regExp =  /^[0-9]+([.][0-9]+)?$/g;
                res = regExp.test(str);
               break; 
            } 
            case 'password': { 
                regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                res = regExp.test(str);
               break; 
            } 
            case 'date': { 
                var regEx = /^\d{4}-\d{2}-\d{2}$/;
                if(!str.match(regEx)){
                    res=false;
                }
                if(res){
                    var d = new Date(str);
                    if(Number.isNaN(d.getTime())) {
                        res=false;
                    }else{
                        res=d.toISOString().slice(0,10) === str;
                    }
                }
               break; 
            } 
            case 'datetime': { 
                var regEx = /^\d\d\d\d-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01])) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/g;
                if(!str.match(regEx)){
                    res=false;
                }
                if(res){
                    var date=str.split(" ")[0];
                    var hora=str.split(" ")[1];
                    var d = new Date(date);    
                    if(Number.isNaN(d.getTime())){
                        res=false;
                    }else{
                        res=d.toISOString().slice(0,10) === date;
                    }

                    if(res){
                        var regEx = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/;
                        if(!hora.match(regEx)){
                            res=false;
                        }
                    }

                }
               break; 
            } 
            case 'time': { 
                var regEx = /(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/;
                if(!str.match(regEx)){
                    res=false;
                }
            }
        }
        if(!(str.length>=lengthmin) && lengthmin>0){
            message="minimo tiene que ser de "+lengthmin+" caracteres.";
         }
         if(!(str.length<=lengthmax) && lengthmax>0){
            message="maximo tiene que ser de "+lengthmax+" caracteres.";
         }
         if(!res){
            message="dato invalido.";
         }

         if(!status){
            return res;
         }else{
            return {
             ok:res,
             message:message
            };
         }
    }

    // obtener infomacion de sistema operativo y navegador de forma detallada.
    public UserAgent=(uastring1:string | undefined)=>{
        var ua = parser(uastring1);
        return {browser:ua.browser.name,browserversion:ua.browser.version,sistema:ua.os};
    }
    // cifrado
    public encriptarBcrypt=async(dato:string)=>{
        return  bcrypt.hash(dato, BCRYPT_SALT_ROUNDS);
    }

    public compararBcrypt=async(clave:string,hash:string)=>{
        return  bcrypt.compare(clave, hash);
    }
    // fin cifrado


    // google autenticador

    public verificarGoogleAuth=(codigo:string,secret:string)=>{
        const verificar=speakeasy.totp.verify({
            secret:secret,
            encoding:'ascii',
            token:codigo
        });
        return verificar;
    }

    public generarGoogleAuth=async(correo:string)=>{
        var secret = speakeasy.generateSecret({
            name:process.env.NOMBRE_PROYECTO+"("+correo+")"
        });
        var token=secret.ascii;
        var otpauth_url=secret.otpauth_url;
        var tex=secret.otpauth_url as string;
        var imagen=await qrcode.toDataURL(tex);
        return {token:token,otpauth_url:otpauth_url,imagen:imagen};
    }
    // fin google autenticador

    public string_to_slug=(str:string)=>{
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9. -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
    
        return str;
    }

    public generateRandomString=(num:number) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result1;
    }

    public diff_minute(date1:string,date2:string){
        var now = moment(new Date(date1));
       
        var end = moment(date2); // another date
        var duration = moment.duration(now.diff(end));
        var minute = duration.asMinutes();
        return minute;
    }
    public dateNow=()=>{
        var now = moment(new Date());
        return now.format("YYYY-MM-DD HH:mm:ss");
    }
    public dateTimeNow=(string:number)=>{
        var a = new Date(string * 1000);
        var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours()<=9 ? "0"+a.getHours():a.getHours();
        var min = a.getMinutes()<=9 ? "0"+a.getMinutes():a.getMinutes();
        var sec = a.getSeconds()<=9 ? "0"+a.getSeconds():a.getSeconds();
        var time = year+'-'+month+'-'+date+' '+hour+':'+min+':'+sec;
        return this.dateFormat(String(time));
    }
    public dateFormat=(date:string)=>{
        var now = moment(new Date(date));
        return now.format("YYYY-MM-DD HH:mm:ss");
    }

    public validateTokenExpire(token:string){
        const user:any=jwt_decode(token);

        return {iat:user.iat,exp:user.exp};
    }
}
export const general=new General;