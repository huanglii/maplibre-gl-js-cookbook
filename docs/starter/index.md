# 快速开始

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) 是一个基于矢量瓦片用 WebGL 渲染交互式地图的 JavaScript 库，地图的渲染遵循 [MapLibre 样式规范](https://maplibre.org/maplibre-style-spec) 。它是从 [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) 项目派生而来的开源项目，遵循 BSD 许可协议。

## 安装

::: code-group

```sh [npm]
$ npm i maplibre-gl
```

```sh [pnpm]
$ pnpm add maplibre-gl
```

```sh [yarn]
$ yarn add maplibre-gl
```

:::

## 使用

```html
<div id="map"></div>
```

```js
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const map = new maplibregl.Map({
  container: 'map', // 地图容器 id
  style: 'naivemap://styles/baisc', // 样式
  center: [104.294538, 35.860092], // 地图初始中心点 [经度, 维度]
  zoom: 2.4, // 地图初始缩放级别
})
```

由于地图样式和数据源通常是远程加载的，为了确保正确操作地图，我们需要使用[事件](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MapEventType/)来监听地图的加载状态。例如：

```js
map.on('load', () => {
  map.addLayer({
    id: 'terrain-data',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2',
    },
    'source-layer': 'contour',
  })
})
```

## CDN

也可以通过 CDN 直接在 HTML 中引入 MapLibre GL JS：

```html
<script src="https://unpkg.com/maplibre-gl/dist/maplibre-gl.js"></script>
<link
  href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css"
  rel="stylesheet"
/>
```
