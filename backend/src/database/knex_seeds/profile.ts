import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("roles").insert([
        { sequence:1,id:'21502070-e688-406e-bf24-a686fced17b5',title: "SuperAdministrador",rol:2},
        { sequence:2,id:'d3761aa8-b00c-4374-bc5f-128630753d06',title: "Administrador",rol:1}
    ]);

    // Inserts seed entries
    await knex("profiles").insert([
        { 
            sequence:1,
            id: "f5413f60-9804-497b-a269-08f7989c569f",
            id_menu:1,
            id_role:1,
            status:1,
        },
        { 
            sequence:2,
            id: "b86a4270-9f67-472e-afa7-304dc5ac29f7",
            id_menu:2,
            id_role:1,
            status:1,
        },
        { 
            sequence:3,
            id: "51b53b01-3243-4671-9b94-e8c4d3025123",
            id_menu:3,
            id_role:1,
            status:1,
        },
        { 
            sequence:4,
            id: "81557c98-7720-4818-ad9d-e726829f9bc2",
            id_menu:4,
            id_role:1,
            status:1,
        },
        { 
            sequence:5,
            id: "5890181d-a78d-40f0-8927-a1e5d949ea1d",
            id_menu:6,
            id_role:1,
            status:1,
        },
        { 
            sequence:6,
            id: "f60f88e0-88de-42d5-a004-91cb89118b7c",
            id_menu:1,
            id_role:2,
            status:1,
        },
        { 
            sequence:7,
            id: "ef84fe78-c203-45ca-a65c-3127bf5390c8",
            id_menu:2,
            id_role:2,
            status:1,
        },
        { 
            sequence:8,
            id: "f01534ca-d6f4-4fac-806b-2381e5e94e99",
            id_menu:3,
            id_role:2,
            status:1,
        },
        { 
            sequence:9,
            id: "2975dbb6-b306-42e7-844c-ca4972e60a28",
            id_menu:4,
            id_role:2,
            status:1,
        },
        { 
            sequence:10,
            id: "29f2899c-b5e0-4948-ac5e-2f940925bdf0",
            id_menu:6,
            id_role:2,
            status:1,
        },{ 
            sequence:39,
            id: "b7c7781e-cfa4-4367-bc78-2ff6d1f36905",
            id_menu:7,
            id_role:1,
            status:1,
        }
        ,{ 
            sequence:40,
            id: "ae61739d-2163-4251-b01f-e1b49d97c01a",
            id_menu:8,
            id_role:1,
            status:1,
        }
    ]);
};
