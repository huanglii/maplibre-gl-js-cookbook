import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "MapLibre GL JS Cookbook",
  titleTemplate: 'NaiveMap',
  description: "地理信息可视化",
  base: '/maplibre-gl-js-cookbook/',
  head: [
    ['link', { rel: 'icon', href: '/maplibre-gl-js-cookbook/assets/logo.png' }],
  ],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/assets/logo.png',
      dark: '/assets/logo.png'
    },
    nav: [
      { text: '快速开始', link: '/starter/' },
      { text: '样式规范', link: '/style-spec/' },
      { text: '空间数据', link: '/data/' },
      // { text: '插件', link: '/plugins/' },
      // { text: '进阶', link: '/advance/' },
      // { text: 'DECK.GL', link: '/deck-gl/' },
    ],
    sidebar: {
      '/starter/': [
        {
          text: '快速开始',
          link: '/starter/',
        },
        {
          text: '标准样式',
          link: '/starter/standard-style/',
        },
        {
          text: '交互处理',
          items: [
            { text: '弹窗', link: '/starter/handlers/popup' },
            { text: '控件', link: '/starter/handlers/control' },
            { text: '标记', link: '/starter/handlers/marker' }
          ],
        },
        {
          text: '教程',
          items: [
            { text: '高亮', link: '/starter/tutorials/highlight' }
          ],
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
            { text: 'OGC API', link: '/starter/service/ogcapi' }
          ],
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huanglii/maplibre-gl-js-cookbook' }
    ],
    editLink: {
      pattern: 'https://github.com/huanglii/maplibre-gl-js-cookbook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2025-${new Date().getFullYear()} huangli`
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline:  {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
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
      linkText: '返回首页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
  }
})
