import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MOCK_USER } from './user'
import { router } from './router'

console.log(router.getRoutes());

createApp(App, MOCK_USER).use(router).mount('#app')
