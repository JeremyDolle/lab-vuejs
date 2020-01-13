import Vue from 'vue'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
