import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primevue/resources/themes/aura-light-green/theme.css' // choose your theme
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'  // optional flex utilities
import PrimeVue from 'primevue/config' // PrimeVue configuration

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')

// we don't touch this file