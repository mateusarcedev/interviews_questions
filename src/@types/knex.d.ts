import { Knex } from "knex"; 

declare module 'knex/types/tables' {
  export interface Tables {
    categories: {
      id: string
      name: string
      description: string
      created_at: string
    },
    questions: {
      id: string
      title: string
      category_id: string
      created_at: string
    },
    answers: {
      id: string,
      answer: string,
      question_id: string
      created_at: string
    }
  }
}