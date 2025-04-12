# 标记

<div class="tip custom-block" style="padding-top: 8px">

API: [Marker](https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker/)

</div>

标记（Marker）用于在地图上绘制点要素，与 [CircleLayer](https://maplibre.org/maplibre-style-spec/layers/#circle) 和 [SymbolLayer](https://maplibre.org/maplibre-style-spec/layers/#symbol) 不同的是，标记是用一个 HTML 元素来渲染的，所以不适合用于大量的点要素。

## 创建标记

```js:no-line-numbers
const marker = new maplibregl.Marker().setLngLat([30.5, 50.5]).addTo(map)
```
