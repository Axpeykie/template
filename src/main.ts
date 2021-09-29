import { createApp } from 'vue'

import Antd from 'ant-design-vue'
import '@/style/base.less'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
