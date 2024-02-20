import fastify from 'fastify'
import { questionsRoutes } from './routes/questions'
import { categoriesRoutes } from './routes/categories'
import { answersRoutes } from './routes/answers'


const app = fastify()

app.register(questionsRoutes, {
  prefix: 'questions'
})
app.register(categoriesRoutes, {
  prefix: 'categories'
})
app.register(answersRoutes, {
  prefix: 'answers'
})

app.listen({
  port: 3333,
})
.then(() => {
  console.log('HTTP Server Running')
})