# 快速开始

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) 是一个基于矢量瓦片用 WebGL 渲染交互式地图的 JavaScript 库，地图的渲染遵循 [MapLibre 样式规范](https://maplibre.org/maplibre-style-spec) 。它是从 [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) 项目派生而来的开源项目，遵循 BSD 许可协议

1. 安装

```bash
npm install --save mapbox-gl
```

::: tip
[mapbox-gl@v3.5.0](https://github.com/mapbox/mapbox-gl-js/releases/tag/v3.5.0) 转为 TypeScript，不用再需安装 `@types/mapbox-gl`。
:::

2. 添加 CSS 样式文件

```js
import 'mapbox-gl/dist/mapbox-gl.css'
```

3. 初始化地图

```js
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = '<your access token here>'
const map = new mapboxgl.Map({
  container: 'map', // 地图容器 id
  style: 'mapbox://styles/mapbox/streets-v11', // 样式
  center: [104.294538, 35.860092], // 地图初始中心点 [经度, 维度]
  zoom: 2.4, // 地图初始缩放级别
  projection: 'globe', // 地图投影，自 v2.9.0 起支持 'globe'
})
```

<ClientOnly>
  <common-code-view name="starter-globe"/>
</ClientOnly>

> 示例：[Display a globe on a webpage](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/)

因为 Mapbox GL JS 中的图层是异步的。因此，通常使用[事件](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-events)绑定在合适的时间更改地图。例如：

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

此示例代码用于仅在加载地图的资源（包括样式）后添加图层。如果立即运行 `map.addLayer`，则会触发错误：`Error: Style is not done loading`，因为要添加图层的样式不存在。

::: tip
有关地图图层的渲染规范，请参考：[样式规范](/style-spec/)。
:::
