import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import mitt from 'mitt'

window.eventBus = mitt()

import 'leaflet/dist/leaflet.css'
import '@/assets/scss/app.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
