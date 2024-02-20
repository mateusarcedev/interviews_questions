import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

export const config:Knex.Config  = {
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '12345',
    database : 'interviews_questions'
  },
migrations: {
  extension: 'ts',
  directory: './db/migrations'
}
}

export const knex = setupKnex(config)