import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router'

import { createPinia } from 'pinia'
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
