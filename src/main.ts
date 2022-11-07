import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import { globalRegister } from './global/index'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/dist/index.css'
import './assets/css/index.less'
import { setupStore } from './store'
const app = createApp(App)
// 注册全局组件和全局变量
globalRegister(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
