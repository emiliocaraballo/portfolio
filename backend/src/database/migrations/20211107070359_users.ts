import { Knex } from "knex";
export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.string('name',100).notNullable();
        table.string('last_name',100);
        table.string('identification',100).notNullable();
        table.string('phone',20);
        table.string('gender',2);
        table.integer('role').defaultTo(0);
        table.integer('profile').defaultTo(0);
        table.string('email').unique().notNullable().comment('');
        table.integer('status').defaultTo(0);
        table.string('two_factor_secret');
        table.string('two_factor_tipo',2);
        table.string('photo_path');
        table.string('code_mail');
        table.timestamp('code_mail_at',{ useTz: false });
        table.string('password');
        table.string('two_factor_recovery_codes');
        table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.fn.now());
        table.text('two_factor_image');
        table.integer('address_id');
        table.string('id_user');
    });
     
    await knex.raw("SELECT setval('users_sequence_seq', 1000, true)");


    await knex.schema.createTable('users_sessions', (table: Knex.TableBuilder) => {
        table.increments('sequence').primary();
        table.uuid('id').unique().defaultTo(knex.raw("uuid_generate_v4()"));
        table.text('user_agent');
        table.text('system');
        table.text('device');
        table.text('browser');
        table.text('version');
        table.string('ip');
        table.integer('status');
        table.timestamp('time_in', { useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('time_out', { useTz: false }).defaultTo(knex.fn.now());
        table.text('token');
        table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: false }).defaultTo(knex.fn.now());
        table.integer('user_id').references("sequence").inTable("users");
    });
    await knex.raw("SELECT setval('users_sessions_sequence_seq', 1000, true)");
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("users_sessions");
    await knex.schema.dropTableIfExists("users");
}