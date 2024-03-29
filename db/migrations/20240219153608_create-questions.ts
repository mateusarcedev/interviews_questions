import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('questions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.uuid('category_id').notNullable().references('id').inTable('categories')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('questions', (table) => {
    table.dropForeign(['category_id']);
  });

  await knex.schema.dropTable('questions');
}

