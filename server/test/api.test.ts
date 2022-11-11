import { expect, test } from 'vitest'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'
import server from '../api/index.js'
import { deviceSizes, Brand, Camera } from '../../dist/index.js'

server.listen(3000)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:3000/api', fetch }),
})

const clientLive = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'https://device-sizes.vercel.app/api', fetch }),
})

test('Returns devices with fields specified.', async () => {
  const response = await client.query({
    query: gql`
      query GetDevices {
        devices {
          id
          name
        }
      }
    `,
  })

  expect(response.loading).toBe(false)

  const { devices } = response.data

  expect(devices.length).toBe(Object.keys(deviceSizes).length)
  expect(Object.keys(devices[0]).length).toBe(3)
  expect(devices[0]['__typename']).toEqual('Device')
  expect(devices[0].id).toBeDefined()
  expect(devices[0].name).toBeDefined()
})

test('Returns additional fields.', async () => {
  const response = await client.query({
    query: gql`
      query GetDevices {
        devices {
          id
          width
          size
          brand
          camera
        }
      }
    `,
  })

  expect(response.loading).toBe(false)

  const { devices } = response.data

  expect(devices.length).toBe(Object.keys(deviceSizes).length)
  expect(Object.keys(devices[0]).length).toBe(6)
  expect(devices[0]['__typename']).toEqual('Device')
  expect(devices[0].id).toBeDefined()
  expect(devices[0].name).not.toBeDefined()
  expect(typeof devices[0].width).toBe('number')
  expect(typeof devices[0].size).toBe('number')
  expect(Brand[devices[0].brand]).toBeDefined()
  expect(typeof Brand[devices[0].brand]).toBe('string')
  expect(Camera[devices[0].camera]).toBeDefined()
})

test('Public API is reachable.', async () => {
  const response = await clientLive.query({
    query: gql`
      query GetDevices {
        devices {
          id
          name
        }
      }
    `,
  })

  expect(response.loading).toBe(false)

  const { devices } = response.data

  expect(devices.length).toBeGreaterThan(10)
  expect(Object.keys(devices[0])).toContain('id')
  expect(Object.keys(devices[0])).toContain('name')
})
