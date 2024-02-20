import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string().transform((val) => parseInt(val)), // Converter para número
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string()
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data;