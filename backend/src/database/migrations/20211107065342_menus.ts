import { Knex } from "knex";
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('menus', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('title').notNullable();
        table.string('url');
        table.string('icon');
        table.integer('parentid');
        table.integer('orden').defaultTo(0);
        table.integer('status');
        table.text('description');
        table.timestamp('created_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at',{ useTz: false }).defaultTo(knex.fn.now());
        table.string('id_user');
    });

    await knex.raw("SELECT setval('menus_sequence_seq', 1000, true)");
}
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("menus");
}