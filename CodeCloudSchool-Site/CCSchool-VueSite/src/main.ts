import './assets/main.css'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import '@primevue/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(PrimeVue)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Button', Button)

// we don't touch this file