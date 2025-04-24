import { defineAdditionalConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  title: 'Mapbox GL JS Cookbook',
  themeConfig: {
    sidebar: {
      '/mapbox/starter/': [
        {
          text: '快速开始',
          link: '/starter/',
        },
        {
          text: '交互处理',
          items: [
            { text: '弹窗', link: '/starter/handlers/popup' },
            { text: '控件', link: '/starter/handlers/control' },
            { text: '标记', link: '/starter/handlers/marker' },
          ],
        },
        {
          text: '教程',
          items: [{ text: '高亮', link: '/starter/tutorials/highlight' }],
        },
        {
          text: '地理与几何',
          link: '/starter/geography/',
        },
        {
          text: '地图服务',
          items: [
            { text: '地图服务', link: '/starter/service/' },
            { text: 'GeoServer', link: '/starter/service/geoserver' },
            { text: 'OGC API', link: '/starter/service/ogcapi' },
          ],
        },
      ],
      '/style-spec/': [
        { text: '样式规范', link: '/style-spec/' },
        { text: '雪碧图', link: '/style-spec/sprite' },
        { text: '字体', link: '/style-spec/glyphs' },
        {
          text: '数据源',
          items: [
            { text: '数据源', link: '/style-spec/sources/' },
            { text: '瓦片', link: '/style-spec/sources/tile' },
            { text: 'GeoJSON', link: '/style-spec/sources/geojson' },
            { text: '图片&视频', link: '/style-spec/sources/image-video' },
          ],
        },
        { text: '图层', link: '/style-spec/layers' },
        { text: '表达式', link: '/style-spec/expression' },
      ],
    },
  },
})
