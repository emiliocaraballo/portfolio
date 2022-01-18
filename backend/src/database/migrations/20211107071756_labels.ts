import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('group_labels', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('title');
        table.string('help');
        table.integer('status');
        table.string('url').unique();
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });
     
    await knex.raw("SELECT setval('group_labels_sequence_seq', 1000, true)");
    

    await knex.schema.createTable('labels', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('key').unique();
        table.string('values');
        table.integer('status');
        table.integer('group_label').references("sequence").inTable("group_labels");
        table.string('help');
        table.string('lang');
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });

    await knex.raw("SELECT setval('labels_sequence_seq', 1000, true)");
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("labels");
    await knex.schema.dropTableIfExists("group_labels");
}