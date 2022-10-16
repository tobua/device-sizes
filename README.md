# Device Sizes

Collection of various properties relevant for development of various popular mobile devices.

## Installation and Usage

```
npm install device-sizes
```

```ts
import { deviceSizes } from "device-sizes";

console.log(deviceSizes.iphone14.name === "iPhone 14"); // true

const widths = Object.keys(deviceSizes).map((key) => deviceSizes[key].width);
const sumOfWidths = widths.reduce((previous, current) => previous + current, 0);
const averageWidth = sumOfWidths / Object.keys(deviceSizes).length;

console.log(averageWidth);
```

## Available Properties

```ts
interface Device {
  id: string;
  name: string;
  width: number;
  height: number;
  // Screen diagonal in inches
  size: number;
  // In Pixels per Inch (ppi)
  density: number;
  // Responsive scaling factor
  scale: number;
  camera: "notch" | "dynamic_island" | "none";
  type: "phone" | "tablet";
}
```
