# 弹窗

<div class="tip custom-block" style="padding-top: 8px">

API: [Popup](https://maplibre.org/maplibre-gl-js/docs/API/classes/Popup/)

</div>

## 创建弹窗

```js
const popup = new Popup()
// 监听弹窗打开事件
popup.on('open', () => {
  console.log('popup was opened')
})
```

## 设置弹窗内容

### HTML

```js:no-line-numbers
popup.setHTML('<h1>Hello World!</h1>').addTo(map)
```

### Vue 3 组件

```js
const popupNode = document.createElement('div')
// Popup 为 Vue3 组件
createApp(Popup).mount(popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```

### React 组件

```js
const popupNode = document.createElement('div')
// Popup 为 React 17 组件
ReactDOM.render(<Popup />, popupNode)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```

```js
const popupNode = document.createElement('div')
// Popup 为 React 18 组件
createRoot(popupNode).render(<Popup />)
popup.setDOMContent(popupNode).setLngLat([107.7, 29.9]).addTo(map)
```
