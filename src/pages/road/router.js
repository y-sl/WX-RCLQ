import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/roadmanage',
      component: () => import('./Home.vue'),
      children: [
        {
          path: 'roadmanage',
          component: () => import('./views/RoadManage')
        },
        {
          path: 'layeranalyze',
          component: () => import('./views/LayerAnalyze')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})

export default router
