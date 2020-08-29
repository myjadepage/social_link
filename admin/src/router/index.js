import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ads-statis',
    name: 'AdsStatis',
    component: () =>
      import('../views/AdsStatis.vue')
  },
  {
    path: '/ads-setting',
    name: 'AdsSetting',
    component: () =>
      import('../views/AdsStatis.vue')
  },
  {
    path: '/ads-owner',
    name: 'AdsOwner',
    component: () =>
      import('../views/AdsOwner.vue')
  },
  {
    path: '/ads-target',
    name: 'AdsTarget',
    component: () =>
      import('../views/AdsTarget.vue')
  }
]

const router = new VueRouter(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  }
)

export default router
