import Vue from 'vue'
import Router from 'vue-router'
import TEST from '@/view/test'
import Login from '@/view/login/login'
import Index from '@/view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name:'index',
      component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: TEST
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
