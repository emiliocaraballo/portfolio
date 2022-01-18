import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('mail_tray', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('name');
        table.string('mail');
        table.integer('status');
        table.integer('type');
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });

     
     await knex.raw("SELECT setval('mail_tray_sequence_seq', 1000, true)");
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("mail_tray");
}