# 控件

控件（Control）是用于控制地图的交互式组件。

## 定位

[GeolocateControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/GeolocateControl/) 提供一个按钮，该按钮使用浏览器的 [Geolocation API](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 在地图上定位用户。

```js:no-line-numbers
map.addControl(new maplibregl.GeolocateControl())
```

## 全屏

[FullscreenControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/FullscreenControl/) 可以切换地图的全屏模式。

```js:no-line-numbers
map.addControl(new maplibregl.FullscreenControl())
```

## 导航

[NavigationControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/NavigationControl/) 包含放大、缩小、方位和旋转。

```js:no-line-numbers
map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }))
```

## 比例尺

[ScaleControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/ScaleControl/) 显示地图上的距离与地面上相应距离的比率。

```js:no-line-numbers
map.addControl(new maplibregl.ScaleControl())
```

## 自定义

MapLibre GL JS 提供了 [**`IControl`**](https://maplibre.org/maplibre-gl-js/docs/API/interfaces/IControl/) 接口。自定义控件必须实现 **`onAdd`** 和 **`onRemove`** 方法，并且有一个 HTML 元素。如果要使用默认控件样式，需要给元素添加 **`maplibregl-ctrl`** 样式。

### 官方示例

```ts
class HelloWorldControl: IControl {
  onAdd(map) {
    this._map = map
    this._container = document.createElement('div')
    this._container.className = 'maplibregl-ctrl'
    this._container.textContent = 'Hello, world'
    return this._container
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container)
    this._map = undefined
  }
}
```
