import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'


axios.defaults.baseURL = "https://notes-backend-coral.vercel.app/api/v1"

// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1"

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
