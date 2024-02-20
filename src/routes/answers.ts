import { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function answersRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const answers = await knex('answers').select('*')

    return answers
  })
}