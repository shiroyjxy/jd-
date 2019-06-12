import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Goodlist.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import(/* webpackChunkName: "about" */ './views/Car.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/User.vue')
    }
  ]
})
