# 地理与几何

## LngLat

<div class="tip custom-block" style="padding-top: 8px">

API: [LngLat](https://maplibre.org/maplibre-gl-js/docs/API/classes/LngLat/)

</div>

`LngLat` 对象表示给定的经度和纬度坐标，以度为单位。在 Maplibre GL JS 中，任何 `LngLat` 参数或选项的方法也可以是两个数字（经、纬度）的数组，参考：[LngLatLike](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/LngLatLike/)

```js
const v1 = new maplibregl.LngLat(-122.420679, 37.772537)
const v2 = [-122.420679, 37.772537]
const v3 = { lon: -122.420679, lat: 37.772537 }
```

实用的实例方法：

1. `wrap()` 将经度转换到范围（-180，180），参考：[wrap](https://maplibre.org/maplibre-gl-js/docs/API/classes/LngLat/#wrap)

## LngLatBounds

<div class="tip custom-block" style="padding-top: 8px">

API: [LngLatBounds](https://maplibre.org/maplibre-gl-js/docs/API/classes/LngLatBounds/)

</div>

`LngLatBounds` 对象表示地理边界（四至），由西南和东北两个点（经纬度）定义。在 Maplibre GL JS 中，任何 `LngLatBounds` 参数或选项的方法也可以是两个 `LngLatLike` 的数组，参考：[LngLatBoundsLike](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/LngLatBoundsLike/)

```js
const v1 = new maplibregl.LngLatBounds(
  new maplibregl.LngLat(-73.9876, 40.7661),
  new maplibregl.LngLat(-73.9397, 40.8002)
)
const v2 = new maplibregl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])
const v3 = [
  [-73.9876, 40.7661],
  [-73.9397, 40.8002],
]
const v4 = [-73.9876, 40.7661, -73.9397, 40.8002]
```

实用的实例方法：

1. `extend(obj)` 扩展边界。参考：[extend](https://maplibre.org/maplibre-gl-js/docs/API/classes/LngLatBounds/#extend)
2. `contains(lnglat)` 判断边界是否包含点。参考：[contains](https://maplibre.org/maplibre-gl-js/docs/API/classes/LngLatBounds/#contains)
