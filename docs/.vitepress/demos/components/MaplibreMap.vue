<template>
  <div class="map-wrapper">
    <div
      :ref="setMapContainer"
      :style="{ width: '100%', height: `${height}px`, borderRadius: '6px' }"
    ></div>
    <slot v-if="mapLoaded"></slot>
  </div>
</template>

<script setup lang="ts">
import maplibregl from 'maplibre-gl'
import { onMounted, ref } from 'vue'
import { createPropHtml } from './util'

interface Props {
  height?: number
  mapOptions?: Omit<maplibregl.MapOptions, 'container'>
  mapClickable?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  height: 520,
  mapClickable: true,
})
const emit = defineEmits<{
  (e: 'load', map: maplibregl.Map): void
}>()

const mapContainer = ref<HTMLElement>()
let map: maplibregl.Map
let mapLoaded = ref(false)

const setMapContainer = (el: HTMLElement) => {
  mapContainer.value = el
}

onMounted(() => {
  const mapDefaultOptions: maplibregl.MapOptions = {
    container: mapContainer.value as HTMLElement,
    style: 'naivemap://style.json',
    center: [104.294538, 35.860092],
    zoom: 2,
    scrollZoom: true,
    cooperativeGestures: true,
    attributionControl: {
      compact: true,
      customAttribution: [
        `v${maplibregl.getVersion()}`,
        '<a href="https://maplibre.org/" target="_blank">MapLibre</a>',
      ],
    },
    transformRequest: (url) => {
      if (url.startsWith('naivemap://')) {
        return {
          url: url.replace('naivemap://', 'https://www.naivemap.com/demotiles/'),
        }
      }
      return { url }
    },
    locale: {
      // 'AttributionControl.ToggleAttribution': 'Toggle attribution',
      // 'AttributionControl.MapFeedback': 'Map feedback',
      // 'FullscreenControl.Enter': 'Enter fullscreen',
      // 'FullscreenControl.Exit': 'Exit fullscreen',
      'GeolocateControl.FindMyLocation': '定位到当前位置',
      'GeolocateControl.LocationNotAvailable': '定位不可用',
      'NavigationControl.ResetBearing': '指北',
      'NavigationControl.ZoomIn': '放大',
      'NavigationControl.ZoomOut': '缩小',
      // 'ScaleControl.Feet': 'ft',
      // 'ScaleControl.Meters': 'm',
      // 'ScaleControl.Kilometers': 'km',
      // 'ScaleControl.Miles': 'mi',
      // 'ScaleControl.NauticalMiles': 'nm',
      'GlobeControl.Enable': '开启地球投影',
      'GlobeControl.Disable': '关闭地球投影',
      // 'TerrainControl.Enable': 'Enable terrain',
      // 'TerrainControl.Disable': 'Disable terrain',
      'CooperativeGesturesHandler.WindowsHelpText': '使用 Ctrl + 滚轮缩放地图',
      'CooperativeGesturesHandler.MacHelpText': '使用 ⌘ + 滚轮缩放地图',
      'CooperativeGesturesHandler.MobileHelpText': '使用双指移动底图',
    },
  }
  const options = Object.assign({}, mapDefaultOptions, props.mapOptions)
  initMap(options)
})

const initMap = (options: maplibregl.MapOptions) => {
  map = new maplibregl.Map(options)
  map.addControl(
    new maplibregl.NavigationControl({
      visualizePitch: true,
    }),
    'top-left'
  )
  map.addControl(new maplibregl.FullscreenControl(), 'top-left')
  map.on('load', async (e) => {
    mapLoaded.value = true
    emit('load', e.target)
  })
  if (props.mapClickable) {
    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point)

      if (features.length > 0) {
        const feature = features[0]
        const { layer, properties, geometry } = feature
        let lngLat: maplibregl.LngLatLike = e.lngLat
        if (geometry.type === 'Point') {
          lngLat = geometry.coordinates as [number, number]
        }
        if (layer && properties) {
          new maplibregl.Popup()
            .setLngLat(lngLat)
            .setHTML(createPropHtml(layer.id, properties))
            .addTo(map)
        }
      }
    })
  }
}
</script>

<style lang="less">
.mapboxgl-popup {
  &-content {
    padding: 0;

    .title {
      padding: 0 30px 0 10px;
      line-height: 32px;
      font-size: 14px;
      color: #fff;
      background-color: #3eaf7c;
    }

    .content {
      padding: 10px;
      max-height: 200px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;

      p {
        margin: 0;
        line-height: 24px;
      }
    }
  }

  &-close-button {
    outline: none;
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    padding: 0 6px;
    font-family: inherit;
  }
}
</style>
