# 样式规范

<div class="tip custom-block" style="padding-top: 8px">

API: [Style Specifications](https://maplibre.org/maplibre-gl-js/docs/style-spec/)

</div>

样式规范是定义地图视觉外观的文档：绘制哪些数据，绘制顺序以及绘制数据时如何设置数据样式。

样式由以下[根级属性](https://maplibre.org/maplibre-style-spec/root/)组成：

## 描述信息

- [version](https://maplibre.org/maplibre-style-spec/root/#version)
- [name](https://maplibre.org/maplibre-style-spec/root/#name)
- [metadata](https://maplibre.org/maplibre-style-spec/root/#metadata)

## 地图状态

- [center](https://maplibre.org/maplibre-style-spec/root/#center)
- [zoom](https://maplibre.org/maplibre-style-spec/root/#zoom)
- [bearing](https://maplibre.org/maplibre-style-spec/root/#bearing)
- [pitch](https://maplibre.org/maplibre-style-spec/root/#pitch)

## 地图要素

- [sources](https://maplibre.org/maplibre-style-spec/root/#sources)
- [layers](https://maplibre.org/maplibre-style-spec/root/#layers)
- [terrain](https://maplibre.org/maplibre-style-spec/root/#terrain)

## 其他

- [sprite](https://maplibre.org/maplibre-style-spec/root/#sprite)
- [glyphs](https://maplibre.org/maplibre-style-spec/root/#glyphs)
- [light](https://maplibre.org/maplibre-style-spec/root/#light)
- [transition](https://maplibre.org/maplibre-style-spec/root/#transition)

## 示例

```json
{
  "version": 8, // 版本号，必须且必须为 8
  "name": "Mapbox Streets", // 样式名称
  "sprite": "mapbox://sprites/mapbox/streets-v8", // 雪碧图
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf", // 字体
  "sources": {...}, // 数据源
  "layers": [...] // 图层，将根据此数组的顺序绘制
}
```
