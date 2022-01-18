import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("group_labels").insert(
    [
       {
           id:'72bca26f-77d4-44b7-96d4-64f1eb1c92f7',
           sequence:1,
           title:'Plantilla Correo Reset Password',
           help:'Cuando se envíe la solicitud de pedir contraseña se mostrará este texto en el correo',
           status:1 ,
           url:'correo-pass-reset'
       }
    ]
    );

    await knex("labels").insert(
        [
           {
                id:'0c84f011-f79d-4d40-a624-33c1f87a9e06',
                sequence:1,
                key:'txt_correo_reset_part_0',
                values:'Hola!',
                status:1 ,
                group_label:1,
                help:1,
                lang:'es'
           },
           {
                id:'35c70b7d-9547-4547-a629-2c4fd80ba586',
                sequence:2,
                key:'txt_correo_reset_part_1',
                values:'Recibió este correo electrónico porque recibimos una solicitud de restablecimiento de contraseña para su cuenta. Para continuar con el restablecimiento de la contraseña, haga clic en el botón de abajo',
                status:1 ,
                group_label:1,
                help:1,
                lang:'es'
            },
            {
                id:'bdbec283-e679-4ad4-adbe-e45da70ed4e7',
                sequence:3,
                key:'txt_correo_reset_part_2',
                values:'Restablecer la contraseña',
                status:1 ,
                group_label:1,
                help:1,
                lang:'es'
            }, 
            {
                id:'0bb96e4f-c471-42c5-8996-1f2b551cb12c',
                sequence:4,
                key:'txt_correo_reset_part_3',
                values:'Este enlace de restablecimiento de contraseña caducará en 60 minutos. Si no solicitó un restablecimiento de contraseña, no es necesario realizar ninguna otra acción.',
                status:1 ,
                group_label:1,
                help:1,
                lang:'es'
            }
            , 
            {
                id:'16708081-eeae-4992-99a0-b4c8497fd82f',
                sequence:5,
                key:'txt_correo_reset_part_4',
                values:'¿El botón no funciona? Intente pegar esta URL en su navegador:',
                status:1 ,
                group_label:1,
                help:1,
                lang:'es'
                }
        ]
        );
};