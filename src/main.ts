import { createApp } from 'vue'
import App from './App.vue'
import 'echarts'

import '@/core/config/index'

const app = createApp(App)
app.mount('#app')
