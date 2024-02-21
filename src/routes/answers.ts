import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function answersRoutes(app: FastifyInstance) {

  // Rota de listagem de respostas
  app.get('/', async () => {
    const answers = await knex('answers').select('*')

    return {answers}
  })

  // Rota de criação de respostas
  app.post('/', async (request, reply) => {
    const createAnswerBodySchema = z.object({
      answer: z.string(),
      question_id: z.string()
    })
    const { answer, question_id } = createAnswerBodySchema.parse(request.body)
    await knex('answers').insert({
      id: randomUUID(),
      answer,
      question_id
    })
    return reply.status(201).send('Resposta criada com sucesso')
  })

}