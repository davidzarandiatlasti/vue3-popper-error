import FloatingVue from 'floating-vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(FloatingVue)
app.mount('#app')
