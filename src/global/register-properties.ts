import { App } from 'vue'

// 当配置全局变量时  需要在globalProperties中同步配置
export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return new Date(value).toLocaleString()
    }
  }
}
