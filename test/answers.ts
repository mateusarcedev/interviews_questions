import { it, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Answers routes', () => {

  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new answer', async () => {
    await request(app.server)
      .post('/answers')
      .send({
        answer: "PHP é uma liguagem de programação de script muito utilizada na WEB",
        question_id: "e1cd53c2-2013-4159-a68a-b2f0051cc201"
      })
      .expect
  })

  it('should be able to list all answers', async() => {
    const listCategoriesResponse = await request(app.server)
    .get('/answers')
    .expect(200)
  })

})