import App from './App.vue'
import Router from './routes/routes.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import './style.css'

const pinia = createPinia()
const head = createHead()

createApp(App).use(Router).use(head).use(pinia).mount('#app')
