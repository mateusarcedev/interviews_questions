import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('questions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.uuid('category_id').notNullable().references('id').inTable('categories')
  })

  await knex.schema.alterTable('questions', (table) => {
    table.unique('category_id')
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('questions', (table) => {
    table.dropForeign(['category_id']);
    table.dropUnique(['category_id']);
  });

  await knex.schema.dropTable('questions');
}

