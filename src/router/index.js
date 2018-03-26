import Vue from 'vue'
import Router from 'vue-router'
import TEST from '@/view/test'
import Login from '@/view/login/login'

Vue.use(Router)

export default new Router({
  base: './',
  mode:'history',
  routes: [
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
