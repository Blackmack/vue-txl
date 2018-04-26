import Vue from 'vue'
import Router from 'vue-router'
import TEST from '@/view/test'
import Login from '@/view/login/login'
import Register from '@/view/login/register'
import Index from '@/view/index'
import Dongtai from '@/view/dongtai'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name:'index',
      component: Index,
      children: [
        {
          path: 'DT',
          name:'dt',
          component: Dongtai,
        },
        {
          path: 'DZ',
          name:'dz',
          component: Index,
        },
      ]
    }
  ]
})
