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
import 'maplibre-gl/dist/maplibre-gl.css'
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
    style: 'https://www.naivemap.com/demotiles/style.json',
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
          url: url.replace('naivemap://', 'https://www.naivemap.com/demotiles'),
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

    // map.setGlyphs('https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf')

    // Add an image to use as a custom marker
    const image = await map.loadImage(
      'https://maplibre.org/maplibre-gl-js/docs/assets/osgeo-logo.png'
    )
    map.addImage('custom-marker', image.data)
    // Add a GeoJSON source with 15 points
    map.addSource('conferences', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [100.4933, 13.7551],
            },
            properties: { year: '2004' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [6.6523, 46.5535],
            },
            properties: { year: '2006' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-123.3596, 48.4268],
            },
            properties: { year: '2007' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [18.4264, -33.9224],
            },
            properties: { year: '2008' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [151.195, -33.8552],
            },
            properties: { year: '2009' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.1404, 41.3925],
            },
            properties: { year: '2010' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-104.8548, 39.7644],
            },
            properties: { year: '2011' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.1665, 52.9539],
            },
            properties: { year: '2013' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.6544, 45.5428],
            },
            properties: { year: '2014' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [126.974, 37.5651],
            },
            properties: { year: '2015' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [7.1112, 50.7255],
            },
            properties: { year: '2016' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-71.0314, 42.3539],
            },
            properties: { year: '2017' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [39.2794, -6.8173],
            },
            properties: { year: '2018' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [26.0961, 44.4379],
            },
            properties: { year: '2019' },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-114.0879, 51.0279],
            },
            properties: { year: '2020' },
          },
        ],
      },
    })

    // Add a symbol layer
    map.addLayer({
      id: 'conferences',
      type: 'symbol',
      source: 'conferences',
      layout: {
        'icon-image': 'custom-marker',
        // get the year from the source's "year" property
        'text-field': ['get', 'year'],
        // 'text-font': ['Noto Sans Bold'],
        'text-offset': [0, 1.25],
        'text-anchor': 'top',
      },
      paint: {
        'text-color': '#fff',
      },
    })
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
