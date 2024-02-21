import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('answers', (table) => {
    table.uuid('id').primary()
    table.text('answer').notNullable()
    table.uuid('question_id').notNullable().references('id').inTable('questions')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable
  })
}


export async function down(knex: Knex): Promise<void> {
}

