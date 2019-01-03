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
      path: 'legalPerson',
      name: 'legalPerson',
      component: () => import('./views/backcar/LegalPerson')
    }, {
      path: 'address',
      name: 'address',
      component: () => import('./views/backcar/Address')
    }, {
      path: 'illegalProportion',
      name: 'illegalProportion',
      component: () => import('./views/wanring/IllegalProportion')
    }, {
      path: 'accidentRate',
      name: 'accidentRate',
      component: () => import('./views/wanring/AccidentRate')
    }, {
      path: 'hazardRate',
      name: 'hazardRate',
      component: () => import('./views/wanring/HazardRate')
    }, {
      path: 'inspectionRate',
      name: 'inspectionRate',
      component: () => import('./views/wanring/InspectionRate')
    }, {
      path: 'rejectionRate',
      name: 'rejectionRate',
      component: () => import('./views/wanring/RejectionRate')
    }, {
      path: 'analyze',
      name: 'analyze',
      component: () => import('./views/analyze')
    }]
  }]
})
export default router
