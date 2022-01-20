import { Knex } from "knex";
export async function up(knex: Knex): Promise<void> {
    await knex.raw("SET TIMEZONE='America/Bogota'");
    
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    
    await knex.schema.createTable('contacts', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('name');
        table.string('mail');
        table.string('subject');
        table.string('message');
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });
    await knex.raw("SELECT setval('contacts_sequence_seq', 1000, true)");
}
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("contacts");
}

