# 快速开始

[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides) 是一个基于矢量瓦片用 WebGL 渲染交互式地图的 JavaScript 库。

## 安装

::: code-group

```sh [npm]
$ npm i mapbox-gl
```

```sh [pnpm]
$ pnpm add mapbox-gl
```

```sh [yarn]
$ yarn add mapbox-gl
```

:::

## 使用

```html
<div id="map"></div>
```

```js
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const map = new mapboxgl.Map({
  container: 'map', // 地图容器 id
  style: 'https://www.naivemap.com/demotiles/style.json', // 样式 URL
  center: [104.294538, 35.860092], // 地图初始中心点 [经度, 维度]
  zoom: 2, // 地图初始缩放级别
})
```

由于地图样式和数据源通常是远程加载的，为了确保正确操作地图，我们需要使用[事件](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-events)来监听地图的加载状态。例如：

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

## 示例

<demo html="mapbox/starter.html" ssg="true" title="显示地图" description="使用 Mapbox GL JS 在 HTML 元素中初始化地图。" />
