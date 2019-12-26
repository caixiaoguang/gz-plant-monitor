import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/monitor-console',
    children: [{
      path: 'monitor-console',
      component: () => import('../views/AppMain.vue')
    }, {
      path: 'monitor-detail',
      name: 'monitorDetail',
      component: () => import('../views/monitorDetail/index.vue')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
