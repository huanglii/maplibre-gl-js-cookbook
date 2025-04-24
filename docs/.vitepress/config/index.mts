import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: 'MapLibre/Mapbox Cookbook',
  titleTemplate: 'NaiveMap',
  description: '地理信息可视化',
  base: '/maplibox-cookbook/',
  head: [['link', { rel: 'icon', href: '/maplibox-cookbook/logo.svg' }]],
  cleanUrls: true,
  lastUpdated: true,
  rewrites: {
    'mapli/:rest*': ':rest*',
  },
  locales: {
    root: { label: 'MapLibre' },
    mapbox: { label: 'Mapbox' },
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    math: true,
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, '../demos'),
        stackblitz: { show: true },
        codesandbox: { show: true },
      })
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
    },
    nav: [
      { text: '快速开始', link: '/starter/' },
      { text: '样式规范', link: '/style-spec/' },
    ],
    sidebar: {
      '/starter/': [
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
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/naivemap/maplibrex-cookbook',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/naivemap/maplibrex-cookbook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} huangli`,
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outline: {
      label: '目录',
      level: [2, 3],
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    notFound: {
      title: '找不到页面',
      quote: '抱歉，我们无法找到您需要的页面。',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示匹配详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '取消',
            },
          },
        },
      },
    },
  },
})
