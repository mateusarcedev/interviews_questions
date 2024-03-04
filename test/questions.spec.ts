import { it, beforeAll, afterAll, describe } from 'vitest'
import request  from 'supertest'
import { app } from '../src/app'

describe('Questions routes', () => {

  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new question', async () => {
    await request(app.server)
      .post('/questions')
      .send({
        "title": "O que é PHP?",
        "category_id": "5f10734d-8b48-4252-bf68-44a5cc473709"
      })
      .expect(201)
  })


  it('should be able to list all questions', async() => {
    await request(app.server)
    .get('/questions')
    .expect(200)
  })

})