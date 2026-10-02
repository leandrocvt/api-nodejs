import fastify from 'fastify'
import { userRoutes } from './http/controllers/user/routes'
import { personRoutes } from './http/controllers/person/routes'

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)
