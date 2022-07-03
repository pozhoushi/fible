import Front from './views/Front.vue'
import Menu from './components/Menu.vue'
import Topper from './components/Topper.vue'
export const routes = [
  { path: '/', component: Front },
  { path: '/b', component: Menu },
  { path: '/c', component: Topper }
]