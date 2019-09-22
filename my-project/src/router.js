import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/tabar/Home.vue'
import Mall from './views/tabar/Mall.vue'
import Personal from './views/tabar/Personal.vue'
import Shopcar from './views/tabar/Shopcar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //更改路由默认选中类
  linkActiveClass:"mui-active",
  routes: [
    {
      path: '/',
     redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/mall',
      component: Mall
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/personal',
      component: Personal
    }
  ]
})
