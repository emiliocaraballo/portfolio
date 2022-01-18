import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('uploads', (table: Knex.TableBuilder) => {
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.increments('sequence').primary();
        table.string('url').unique().notNullable();
        table.string('name');
        table.string('alt');
        table.jsonb('formats');
        table.string('ext');
        table.string('mime');
        table.decimal('size');
        table.decimal('width');
        table.decimal('height');
        table.integer('status');
        table.text('metadata');
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });
     
    await  knex.raw("SELECT setval('uploads_sequence_seq', 1000, true)");
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("uploads");
}

