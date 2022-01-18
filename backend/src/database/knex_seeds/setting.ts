import { Knex } from "knex";
export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("settings").insert([
        { 
            sequence: 1,
            id: "d946abff-7308-45ae-b574-4f3f8ac863ad",
            project_name: "emilio fernando",
            mail: "caraballo dueñas",
            phone: "3017205180",
            status:1,
            created_at:knex.fn.now(),
            updated_at:knex.fn.now()
        }
    ]);
};