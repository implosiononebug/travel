import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/city'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})