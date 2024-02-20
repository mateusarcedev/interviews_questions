import { FastifyInstance } from "fastify";
import { knex } from '../database'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const categories = await knex('categories').select('*')

    return categories
  })
}