import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import 'leaflet/dist/leaflet.css'
import '@/assets/scss/app.scss'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')
