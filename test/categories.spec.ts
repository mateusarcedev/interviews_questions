import { it, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Categories routes', () => {

  beforeAll(async() => {
    await app.ready()
  })
  
  afterAll(async () => {
    await app.close()
  })
  
  it('should be able to create a new category', async () => {
    await request(app.server)
      .post('/categories')
      .send({
        "name": "Teste",
        "description": "Perguntas e respostas relacionadas à testes de software"
      })
      .expect(201)
  }) 

  it('should be able to list all categories', async() => {
    const listCategoriesResponse = await request(app.server)
    .get('/categories')
    .expect(200)
  })

})

