import nodemailer from "nodemailer";
import { general } from "./general";

class Mailer{

    private hostname: string="mail.smartinfo.com.co";
    private port: number=465;
    private secure: boolean=true;
    private requireTLS: boolean=false;
    private logger: boolean=false;
    private username: string="servicio@smartinfo.com.co";
    private password: string="servicio2k15";
    private from:string="emiliocaraballo9810@gmail.com";
    
    public smart_main=async(name:string="Smartinfo",subject:string="Hello from smartinfo",html:string="<strong>Hello world?</strong>",to:string | any[]="emiliocaraballo9810@gmail.com",replay:string | any[]="emilioflow2016@gmail.com")=>{

      try {
        const transporter = nodemailer.createTransport({
          host: this.hostname,
          port: this.port,
          secure: this.secure,
          requireTLS: this.requireTLS,
          auth: {
            user: this.username,
            pass: this.password,
          },
          logger: this.logger
        });

        const info = await transporter.sendMail({
          from: '"'+name+'" <'+this.from+">",
          to: to,
          bcc: replay,
          subject:subject,
          html: html,
        });
        
        return info.messageId.length>0;
      } catch (error) {
        
      }
      return false;
    }

    public mainFormat=async(title:string,subject:string,body:string,to:string | any[],replay:string | any[])=>{

    var name_proyect=String(process.env.NOMBRE_PROYECTO);

      var html=/*html*/`
      
      <html>
      <head>
          <title>${title}</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <style>html,body { padding: 0; margin:0; }</style>
      <body>
        
        <div style="font-family:Arial,Helvetica,sans-serif; line-height: 1.5; font-weight: normal; font-size: 15px; color: #2F3044; min-height: 100%; margin:0; padding:0; width:100%; background-color:#edf2f7">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0 auto; padding:0; max-width:600px">
              <tbody>
                  <tr>
                      <td align="center" valign="center" style="text-align:center; padding: 40px">
                          <a href="https://keenthemes.com" rel="noopener" target="_blank">
                              <img alt="Logo" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/mail.svg" />
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td align="left" valign="center">
                          <div style="text-align:left; margin: 0 20px; padding: 40px; background-color:#ffffff; border-radius: 6px">
                              <!--Body-->
                                ${body}
                              <!--end:Body-->
                              <div style="padding-bottom: 5px">${name_proyect}.
                              <tr>
                                  <td align="center" valign="center" style="font-size: 13px; text-align:center;padding: 20px; color: #6d6e7c;">
                                      <p>Floor 5, 450 Avenue of the Red Field, SF, 10050, USA.</p>
                                      <p>Copyright © 
                                      <a href="https://keenthemes.com" rel="noopener" target="_blank">Keenthemes</a>.</p>
                                  </td>
                              </tr></br></div>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </body>
  </html>  

      `

      return this.smart_main(title,subject,html,to,replay);

    }
    
    public mainFormatResetPassword=async(user:string,part1:string,part2:string,part3:string,part4:string,part5:string,code:string)=>{

        
        var url=process.env.URL_FRONTEND+"password-active?email="+user+"&code="+code;
        var html= /*html*/`
                <div style="padding-bottom: 30px; font-size: 17px;">
                <strong>${part1}</strong>
                </div>
                <div style="padding-bottom: 30px">${part2}</div>
                <div style="padding-bottom: 40px; text-align:center;">
                    <a href="${url}" rel="noopener" style="text-decoration:none;display:inline-block;text-align:center;padding:0.75575rem 1.3rem;font-size:0.925rem;line-height:1.5;border-radius:0.35rem;color:#ffffff;background-color:#009EF7;border:0px;margin-right:0.75rem!important;font-weight:600!important;outline:none!important;vertical-align:middle" target="_blank">${part3}</a>
                </div>
                <div style="padding-bottom: 30px">${part4}</div>
                <div style="border-bottom: 1px solid #eeeeee; margin: 15px 0"></div>
                <div style="padding-bottom: 50px; word-wrap: break-all;">
                    <p style="margin-bottom: 10px;">${part5}</p>
                    <a href="${url}" rel="noopener" target="_blank" style="text-decoration:none;color: #009EF7">${url}</a>
                </div>
            `;

            var to="emiliocaraballo9810@gmail.com";
            var replay="";
           return await mailer.mainFormat(String(process.env.NOMBRE_PROYECTO),'Recuperación de contraseña - '+process.env.NOMBRE_PROYECTO,html,to,replay);
    }

    public mainFormatLogin=async(name:string,ip:string)=>{
      var date=general.dateNow();
      var html= /*html*/`
        <FONT FACE="arial"  SIZE="6" color="#000" >
          Hola ${name},
        </FONT><br><br>
        <FONT FACE="Arial" SIZE="4" color="#4e4e4e">
            Has iniciado sesion en nuestra plataforma el ${date} desde la IP: ${ip}
        </FONT>
        <br><br>
      `;
      var to="emiliocaraballo9810@gmail.com";
      var replay="";
     return await mailer.mainFormat(String(process.env.NOMBRE_PROYECTO),'Inicio de sesión - '+process.env.NOMBRE_PROYECTO,html,to,replay);

    }

    public mainFormatUserCreate=async(name:string)=>{
      var url_web=String(process.env.URL_FRONTEND);
      var date=general.dateNow();
      var html= /*html*/`
        <FONT FACE="arial"  SIZE="4" color="#000" >
        Hola ${name}, Se ha registrado es nuestra plataforma.<br><br>
        <a href="${url_web}">Haga clic aquí para ir al portal!</a><br>
        </FONT>
      `;
      var to="emiliocaraballo9810@gmail.com";
      var replay="";
     return await mailer.mainFormat(String(process.env.NOMBRE_PROYECTO),'Registro de usuario - '+process.env.NOMBRE_PROYECTO,html,to,replay);
    }

    public mainFormatUserUpdatePassword=async(name:string)=>{
      var url_web=String(process.env.URL_FRONTEND);
      var date=general.dateNow();
      var html= /*html*/`
        <FONT FACE="arial"  SIZE="4" color="#000" >
            Hola ${name}, <br>su contraseña ha sido cambiada correctamente el dia ${date}<br>
        </FONT>
      `;
      var to="emiliocaraballo9810@gmail.com";
      var replay="";
     return await mailer.mainFormat(String(process.env.NOMBRE_PROYECTO),'Recuperacion de clave - '+process.env.NOMBRE_PROYECTO,html,to,replay);
    }

}

export const mailer = new Mailer;