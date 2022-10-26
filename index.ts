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

export const deviceSizes: Record<string, Device> = {
  // Apple
  iphone14: {
    id: 'iphone14',
    name: 'iPhone 14',
    width: 1170,
    height: 2532,
    size: 6.1,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone14plus: {
    id: 'iphone14plus',
    name: 'iPhone 14 Plus',
    width: 1284,
    height: 2778,
    size: 6.7,
    density: 458,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone14pro: {
    id: 'iphone14pro',
    name: 'iPhone 14 Pro',
    width: 1179,
    height: 2556,
    size: 6.1,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.DynamicIsland,
    type: Type.Phone,
  },
  iphone14promax: {
    id: 'iphone14promax',
    name: 'iPhone 14 Pro Max',
    width: 1290,
    height: 2796,
    size: 6.7,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.DynamicIsland,
    type: Type.Phone,
  },
  iphonese3: {
    id: 'iphonese3',
    name: 'iPhone SE 3rd gen',
    width: 750,
    height: 1334,
    size: 4.7,
    density: 326,
    scale: 2,
    brand: Brand.Apple,
    camera: Camera.Outside,
    type: Type.Phone,
  },
  iphone13: {
    id: 'iphone13',
    name: 'iPhone 13',
    width: 1170,
    height: 2532,
    size: 6.06,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone13mini: {
    id: 'iphone13mini',
    name: 'iPhone 13 mini',
    width: 1080,
    height: 2340,
    size: 5.42,
    density: 476,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone13pro: {
    id: 'iphone13pro',
    name: 'iPhone 13 Pro',
    width: 1170,
    height: 2532,
    size: 6.06,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone13promax: {
    id: 'iphone13promax',
    name: 'iPhone 13 Pro Max',
    width: 1284,
    height: 2778,
    size: 6.68,
    density: 458,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Notch,
    type: Type.Phone,
  },
  iphone12: {
    id: 'iphone12',
    name: 'iPhone 12',
    width: 1170,
    height: 2532,
    size: 6.06,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone12mini: {
    id: 'iphone12mini',
    name: 'iPhone 12 mini',
    width: 1080,
    height: 2340,
    size: 5.42,
    density: 476,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone12pro: {
    id: 'iphone12pro',
    name: 'iPhone 12 Pro',
    width: 1170,
    height: 2532,
    size: 6.06,
    density: 460,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone12promax: {
    id: 'iphone12promax',
    name: 'iPhone 12 Pro Max',
    width: 1284,
    height: 2778,
    size: 6.68,
    density: 458,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphonese2: {
    id: 'iphonese2',
    name: 'iPhone SE 2nd gen',
    width: 750,
    height: 1334,
    size: 4.7,
    density: 326,
    scale: 2,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone11: {
    id: 'iphone11',
    name: 'iPhone 11',
    width: 828,
    height: 1792,
    size: 6.1,
    density: 326,
    scale: 2,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone11pro: {
    id: 'iphone11pro',
    name: 'iPhone 11 Pro',
    width: 1125,
    height: 2436,
    size: 5.85,
    density: 458,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  iphone11promax: {
    id: 'iphone11promax',
    name: 'iPhone 11 Pro Max',
    width: 1242,
    height: 2688,
    size: 6.46,
    density: 458,
    scale: 3,
    brand: Brand.Apple,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  // Google
  pixel7: {
    id: 'pixel7',
    name: 'Google Pixel 7',
    width: 1080,
    height: 2400,
    size: 6.3,
    density: 416,
    scale: 3,
    brand: Brand.Google,
    camera: Camera.Unknown,
    type: Type.Phone,
  },
  // Samsung
  galaxys22ultra: {
    id: 'galaxys22ultra',
    name: 'Samsung Galaxy S22 Ultra 5G',
    width: 1440,
    height: 3088,
    size: 6.8,
    density: 500,
    scale: 4,
    brand: Brand.Samsung,
    camera: Camera.Center,
    type: Type.Phone,
  },
  galaxya53: {
    id: 'galaxya53',
    name: 'Samsung Galaxy A53 5G',
    width: 1080,
    height: 2400,
    size: 6.5,
    density: 405,
    scale: 3, // 2.625??
    brand: Brand.Samsung,
    camera: Camera.Center,
    type: Type.Phone,
  },
  // Xiaomi
  redminote9pro: {
    id: 'redminote9pro',
    name: 'Xiaomi Redmi Note 9 Pro',
    width: 1080,
    height: 2400,
    size: 6.67,
    density: 395,
    scale: 3, // ?
    brand: Brand.Xiaomi,
    camera: Camera.Center,
    type: Type.Phone,
  },
  '12t': {
    id: '12t',
    name: 'Xiaomi 12T',
    width: 1220,
    height: 2712,
    size: 6.67,
    density: 446,
    scale: 3, // ?
    brand: Brand.Xiaomi,
    camera: Camera.Center,
    type: Type.Phone,
  },
  '12tpro': {
    id: '12tpro',
    name: 'Xiaomi 12T Pro',
    width: 1220,
    height: 2712,
    size: 6.67,
    density: 446,
    scale: 3, // ?
    brand: Brand.Xiaomi,
    camera: Camera.Center,
    type: Type.Phone,
  },
  // Oppo
  reno8pro: {
    id: 'reno8pro',
    name: 'Oppo Reno8 Pro',
    width: 1080,
    height: 2412,
    size: 6.7,
    density: 394,
    scale: 3, // ?
    brand: Brand.Oppo,
    camera: Camera.Center,
    type: Type.Phone,
  },
  // Huawei
  p9litemini: {
    id: 'p9litemini',
    name: 'Huawei P9 lite mini',
    width: 720,
    height: 1280,
    size: 5,
    density: 294,
    scale: 2, // ?
    brand: Brand.Huawei,
    camera: Camera.Outside,
    type: Type.Phone,
  },
}
