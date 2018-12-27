import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./Home'),
    children: [{
      path: 'emphasispeople',
      name: 'emphasispeople',
      component: () => import('./views/regulatory/EmphasisPeople')
    }, {
      path: 'analyze',
      name: 'analyze',
      component: () => import('./views/analyze')
    }, {
      path: 'illegal',
      name: 'illegal',
      component: () => import('./views/illegal')
    }]
  }]
})
export default router
