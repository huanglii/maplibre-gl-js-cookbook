import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.less'

// 使用 Vite 的 glob 导入功能
const modules = import.meta.glob<string>('../demos/components/**/*.vue', {
  eager: true,
})

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 自动注册 components 目录下的所有 .vue 组件
    Object.entries(modules).forEach(([path, module]) => {
      // 获取组件名称（去除路径和文件扩展名）
      const componentName = path.split('/').pop()?.split('.').shift()
      if (componentName) {
        app.component(componentName, (module as any).default)
      }
    })
  },
} satisfies Theme
