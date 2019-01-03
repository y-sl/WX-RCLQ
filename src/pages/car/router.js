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
          path: 'carlocation',
          name: '车辆实时定位',
          component: () => import('./views/track/CarLocation.vue')
        },
        {
          path: 'tracksearch',
          name: '轨迹查询',
          component: () => import('./views/track/TrackSearch.vue')
        },
        {
          path: 'nottravel',
          name: '三天未出行',
          component: () => import('./views/track/abnormalsearch/NotTravel.vue')
        },
        {
          path: 'coordinateskewing',
          name: '坐标偏移',
          component: () =>
            import('./views/track/abnormalsearch/CoordinateSkewing.vue')
        },
        {
          path: 'coordinatenomatch',
          name: '坐标不匹配',
          component: () =>
            import('./views/track/abnormalsearch/CoordinateNoMatch.vue')
        },
        {
          path: 'stanceanalyze',
          name: '落脚点分析',
          component: () =>
            import('./views/track/abnormalsearch/CoordinateSkewing.vue')
        },
        {
          path: 'spacesearch',
          name: '空间查询',
          component: () => import('./views/track/SpaceSearch.vue')
        },
        {
          path: 'gatherwarn',
          name: '聚集预警',
          component: () => import('./views/gather/index.vue')
        },
        {
          path: 'morecar',
          name: '一证多车',
          component: () => import('./views/abnormalWarn/MoreCar.vue')
        },
        {
          path: 'moreillegal',
          name: '违法大户',
          component: () => import('./views/abnormalWarn/MoreIllegal.vue')
        },
        {
          path: 'testwarn',
          name: '检验预警',
          component: () => import('./views/abnormalWarn/TestWarn.vue')
        },
        {
          path: 'overduewarn',
          name: '审验超期预警',
          component: () => import('./views/abnormalWarn/OverdueWarn.vue')
        },
        {
          path: 'illegalwarn',
          name: '违法预警',
          component: () => import('./views/illegalWarn/IllegalWarn.vue')
        },
        {
          path: 'timewarn',
          name: '时间预警',
          component: () => import('./views/illegalWarn/TimeWarn.vue')
        },
        {
          path: 'speedwarn',
          name: '超速预警',
          component: () => import('./views/illegalWarn/SpeedWarn.vue')
        },
        {
          path: 'accidentwarn',
          name: '实时事故预警',
          component: () => import('./views/accidentWarn/index.vue')
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
