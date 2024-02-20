import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/questions', async () => {
    const tables = await knex('questions').select('*')

    return tables
})

app.listen({
  port: 3333,
})
.then(() => {
  console.log('HTTP Server Running')
})