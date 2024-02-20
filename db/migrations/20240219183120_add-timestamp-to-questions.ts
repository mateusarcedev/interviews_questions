import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('questions', (table) => {
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('questions', (table) => {
    table.dropColumn('created_at')
  })
}

