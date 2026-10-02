import type { FastifyInstance } from 'fastify'
import { create } from './create'
import { finduser } from './find-user'

export async function userRoutes(app: FastifyInstance) {
  app.get('/user/:id', finduser)
  app.post('/user', create)
}
