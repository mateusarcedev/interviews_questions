import { test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async() => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new category', async () => {
  await request(app.server)
    .post('/categories')
    .send({
      "name": "Teste",
      "description": "Perguntas e respostas relacionadas à testes de software"
    })
    .expect(201)
}) 