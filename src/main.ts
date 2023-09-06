import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './routes/routes.js'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(Router)
.use(pinia)
.mount('#app')
