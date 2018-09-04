import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login'
import userCenter from '../view/usercenter/usermain'
import Index from '../view/index'
import Register from '../view/login/register'

import Dongtai from '../view/dongtai'


Vue.use(Router)
export default new Router({
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
          path: '/DT',
          name:'dt',
          component: Dongtai,
        },
        {
          path: '/DZ',
          name:'dz',
          component: Index,
        }
      ]
    },
    {
      path: '/userCenter',
      name:'userCenter',
      component: userCenter,
    }
  ]
})
