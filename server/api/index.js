import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { createServer } from 'node:http'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { deviceSizes } from 'device-sizes'

// DOC https://www.apollographql.com/docs/apollo-server/api/express-middleware/

const app = express()

const typeDefs = `
  type Device {
    id: ID!
    name: String!
    width: Int!
    height: Int!
    size: Float!
    density: Int!
    scale: Float!
    brand: String!
    camera: String!
    type: String!
  }
  type Query {
    devices: [Device!]!
  }
`

const resolvers = {
  Query: {
    devices: () => Object.keys(deviceSizes).map((key) => deviceSizes[key]),
  },
}

const httpServer = createServer(app)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use('/api', cors(), bodyParser.json(), expressMiddleware(server))

export default httpServer
