import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./Home.vue'),
      children: [
        {
          path: 'layerControl',
          name: '图层控制',
          component: () => import('./views/layerManage/LayerControl.vue')
        },
        {
          path: 'baseInfoControl',
          name: '基本信息控制',
          component: () => import('./views/layerManage/BaseInfoControl.vue')
        },
        {
          path: 'linewarning',
          name: '车辆线路预警',
          component: () => import('./views/lineManage/CarLineWarn.vue')
        },
        {
          path: 'linemanage',
          name: '车辆线路管理',
          component: () => import('./views/lineManage/CarLineManage.vue')
        },
        {
          path: 'analyze',
          name: '综合研判分析',
          component: () => import('./views/analyze')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})

// router.afterEach(route => {

// })

export default router
