import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function questionsRoutes(app: FastifyInstance) { 

  app.get('/', async () => {
    const tables = await knex('questions').select('*')

    return tables
})
}