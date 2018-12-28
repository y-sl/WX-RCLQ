import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: 'company',
      name: 'company',
      component: () => import('./views/company')
    }, {
      path: 'personalcar',
      name: 'personalcar',
      component: () => import('./views/backcar/PersonalCar')
    }, {
      path: 'analyze',
      name: 'analyze',
      component: () => import('./views/analyze')
    }]
  }]
})
export default router
