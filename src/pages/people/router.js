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
      path: 'emphasiscar',
      name: 'emphasiscar',
      component: () => import('./views/regulatory/EmphasisCar')
    }, {
      path: 'carmore',
      name: 'carmore',
      component: () => import('./views/abnormal/CarMore')
    }, {
      path: 'reviewforecast',
      name: 'reviewforecast',
      component: () => import('./views/abnormal/ReviewForecast')
    }, {
      path: 'illegalclient',
      name: 'illegalclient',
      component: () => import('./views/abnormal/IllegalClient')
    }, {
      path: 'analyze',
      name: 'analyze',
      component: () => import('./views/analyze')
    }, {
      path: 'accident',
      name: 'accident',
      component: () => import('./views/accident')
    }, {
      path: 'illegal',
      name: 'illegal',
      component: () => import('./views/illegal')
    }]
  }]
})
export default router
