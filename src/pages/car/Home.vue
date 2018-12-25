<template>
  <div id="car"
       class="wrap">
    <div class="nav-menu-wrapper">
      <y-logo logo="car" />
      <nav-menu :menus='menus'
                @routerShow="toggleRouterView" />
      <div class="user">用户登陆</div>
    </div>
    <div class="view-wrapper"
         v-show="isShow">
      <router-view id="router-view"></router-view>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import YLogo from '@/components/YLogo'
import NavMenu from '@/components/NavMenu'
export default {
  components: {
    YLogo,
    NavMenu
  },
  data () {
    return {
      isShow: false,
      menus: [
        {
          title: '图层管理',
          icon: 'icon-layer',
          sub: [
            {
              title: '图层控制',
              url: 'layerControl'
            },
            {
              title: '基本信息控制',
              url: 'baseInfoControl'
            }
          ]
        },
        {
          title: '线路监管',
          icon: 'icon-xianlu',
          sub: [
            {
              title: '车辆线路预警',
              url: 'linewarning'
            },
            {
              title: '车辆线路管理',
              url: 'linemanage'
            }
          ]
        },
        {
          title: '轨迹大数据调研',
          icon: 'icon-guiji1',
          sub: [
            {
              title: '车辆实时定位',
              url: ''
            },
            {
              title: '轨迹查询',
              url: ''
            },
            {
              title: '轨迹异常查询',
              sub: [
                {
                  title: '三天未出行',
                  url: ''
                },
                {
                  title: '坐标漂移',
                  url: ''
                },
                {
                  title: '坐标漂移',
                  url: ''
                },
                {
                  title: '坐标不匹配',
                  url: ''
                }
              ]
            },
            {
              title: '落脚点分析',
              url: ''
            },
            {
              title: '空间查询',
              url: ''
            }
          ]
        },
        {
          title: '聚集预警',
          icon: 'icon-jujiyujing',
          url: ''
        },
        {
          title: '异常预警',
          icon: 'icon-yichangyujing',
          sub: [
            {
              title: '一证多车',
              url: ''
            },
            {
              title: '违法大户',
              url: ''
            },
            {
              title: '检验预警',
              url: ''
            },
            {
              title: '审验超期预警',
              url: ''
            }
          ]
        },
        {
          title: '违法预警',
          icon: 'icon-weifachaxun',
          sub: [
            {
              title: '实时违法预警',
              url: ''
            },
            {
              title: '时间预警',
              url: ''
            },
            {
              title: '超速预警',
              url: ''
            }
          ]
        },
        {
          title: '实时事故预警',
          icon: 'icon-traffic',
          url: ''
        },
        {
          title: '综合查询分析',
          icon: 'icon-fenxi',
          url: 'analyze'
        }
      ]
    }
  },
  methods: {
    toggleRouterView (bool) {
      this.isShow = bool
      if (bool) {
        this.isShow = true
      } else {
        // this.isShow = bool
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.user
  position fixed
  left 0
  bottom 0
  z-index 1000
  width 250px
  height 35px
  color #fff
  line-height 35px
  text-align center
  // margin-top -35px
  background-color #4a5661
  @media screen and (max-width: 1366px)
    &
      width 200px
</style>
