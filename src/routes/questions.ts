import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import {z} from 'zod'
import { randomUUID } from 'node:crypto' 

export async function questionsRoutes(app: FastifyInstance) { 

  // Rota de listagem de perguntas
  app.get('/', async () => {
    const questions = await knex('questions').select()
 
    return {questions}
})

  // Rota de criação de perguntas
  app.post('/', async (request, reply) => {
    const createQuestionBodySchema = z.object({
      title: z.string(),
      category_id: z.string()
    })
    const { title, category_id } = createQuestionBodySchema.parse(request.body)
    await knex('questions').insert({
      id: randomUUID(),
      title,
      category_id
    })
  
    return reply.status(201).send('Pergunta criada com sucesso')
  })

  // Rota de perguntas de categorias
  app.get('/:categoryId/questions', async (request, reply) => {
    const getQuestionsParamsSchema = z.object({
      categoryId: z.string().uuid(),
    })

    const {categoryId} = getQuestionsParamsSchema.parse(request.params)  

    const questionsByCategory = await knex('questions')
    .select()
    .where('category_id', categoryId)

    return {questionsByCategory}
  })

}