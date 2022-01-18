import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("menus").insert(
    [
        { 
            sequence: 1,
            id:'0276ccf3-04f2-497a-93b5-6fa0ab687e3d',
            title: "Dashboard", 
            parentid:0, 
            status:1,
            icon:'icon-grid  menu-icon',
            orden:0, 
            url:'/',
            
            
        },
        { 
            sequence: 2,
            id:'5bba3bfa-1bc7-4a8d-84a1-fe701c6d30e2',
            title: "Usuario", 
            parentid:0, 
            status:1, 
            icon:'icon-head  menu-icon',
            orden:1,    
            url:'/user',
            
        },
        { 
            sequence: 3,
            id:'1f6cdd1a-a297-4c97-9490-3caff607ce9a',
            title: "Ingresar", 
            parentid:2, 
            status:1, 
            orden:2, 
            url:'/user/register',
            
            
        },
        { 
            sequence: 4,
            id:'4cab7099-1397-446f-b034-6cbe6ff616eb',
            title: "Consultar", 
            parentid:2, 
            status:1, 
            orden:1, 
            url:'/user/list',
            
            
        },
        { 
            sequence: 6,
            id:'f9573dff-eeed-47b7-8d89-91f7bcf2ab2e',
            title: "Documentación", 
            parentid:0, 
            status:1, 
            icon:'icon-paper  menu-icon', 
            orden:100,
            url:'/documentation',
        },
        { 
            sequence: 8,
            id:'dfea728c-a544-406c-bdb1-f398d8ba73d0',
            title: "Crear Menú", 
            parentid:0, 
            status:1, 
            icon:'icon-grid-2 menu-icon', 
            orden:99,
            url:'/menu',
        },
        { 
            sequence: 7,
            id:'5a72e13d-d7cf-4062-90b2-b2e268ca9626',
            title: "Role(s)", 
            parentid:0, 
            status:1, 
            icon:'icon-columns menu-icon', 
            orden:98,
            url:'/role',
        }
    ]
    );
};
