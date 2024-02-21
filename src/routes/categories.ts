import { FastifyInstance } from "fastify";
import { knex } from '../database'
import { z } from "zod"; 
import { randomUUID } from "node:crypto";

export async function categoriesRoutes(app: FastifyInstance) {
  app.post('/categories', async (request, reply) => {
    
    const createCategoryBodySchema = z.object({
      name: z.string(),
      description: z.string().optional()
    })

    const { name, description } = createCategoryBodySchema.parse(request.body)

    await knex('categories').insert({
      id: randomUUID(),
      name,
      description
    })

    return reply.status(201).send('Categoria criada com sucesso!')
  })
}