import { ApolloServer, gql } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { createServer } from 'node:http'
import express, { Express } from 'express'
import cors from 'cors'
import { deviceSizes } from '../../index.js'

const app = express()
app.use(cors())
app.get('/', (_, response) => response.send('GraphQL running under /graphql.'))
const httpServer = createServer(app)

export enum Brand {
  Apple,
  Samsung,
  Google,
  Xiaomi,
  Oppo,
  Huawei,
}

export enum Camera {
  Notch,
  DynamicIsland,
  Center,
  Left,
  Right,
  Outside,
  Unknown,
}

export enum Type {
  Phone,
  Tablet,
}

export interface Device {
  id: string
  name: string
  width: number
  height: number
  size: number
  density: number // In Pixels per Inch (ppi)
  scale: number
  brand: Brand
  camera: Camera
  type: Type
}

const typeDefs = gql`
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

const startApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  })
  await server.start()
  server.applyMiddleware({ app })
}

await startApolloServer(app)

export default httpServer
