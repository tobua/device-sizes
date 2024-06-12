<p align="center">
  <img src="https://github.com/tobua/device-sizes/raw/main/logo.png" alt="Device Sizes" width="250">
</p>

# Device Sizes

Collection of various properties relevant for development of various popular mobile devices.

## Installation and Usage

```
npm install device-sizes
```

```ts
import { deviceSizes } from 'device-sizes'

console.log(deviceSizes.iphone15.name === 'iPhone 15') // true

const widths = Object.keys(deviceSizes).map((key) => deviceSizes[key].width)
const sumOfWidths = widths.reduce((previous, current) => previous + current, 0)
const averageWidth = sumOfWidths / Object.keys(deviceSizes).length

console.log(averageWidth)
```

## Available Properties

```ts
interface Device {
  id: string
  name: string
  width: number
  height: number
  // Screen diagonal in inches
  size: number
  // In Pixels per Inch (ppi)
  density: number
  // Responsive scaling factor
  scale: number
  brand: Brand
  camera: Camera
  type: Type
}

enum Brand {
  Apple,
  Samsung,
  Google,
  Xiaomi,
  Oppo,
  Huawei,
}

enum Camera {
  Notch,
  DynamicIsland,
  Center,
  Left,
  Right,
  Outside,
  Unknown,
}

enum Type {
  Phone,
  Tablet,
}
```

The types can be imported from the plugin when needed.

```ts
import { Device, Brand, Camera, Type } from 'device-sizes'
```

## GraphQL API

To avoid bundling all devices or download unnecessary properties the data can be queried through GraphQL. The API is reachable at `https://device-sizes.vercel.app/api`.

```ts
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://device-sizes.vercel.app/api'
  cache: new InMemoryCache(),
})

const response = await client.query({
  query: gql`
    query GetDevices {
      devices {
        id
        name
        width
        height
      }
    }
  `,
})

const { devices } = response.data
```
