<template>
  <div id="people"
       class="wrap">
    <div class="nav-menu-wrapper">
      <y-logo logo="people" />
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
          title: '监管对象',
          icon: 'icon-jianguanduixiang',
          sub: [
            {
              title: '重点驾驶人',
              url: 'emphasispeople'
            },
            {
              title: '重点车辆驾驶人',
              url: '/'
            }
          ]
        },
        {
          title: '异常预警',
          icon: 'icon-yichangyujing',
          sub: [
            {
              title: '一车多证',
              url: '/'
            },
            {
              title: '违法大户',
              url: '/'
            },
            {
              title: '审核逾期',
              url: '/'
            }
          ]
        },
        {
          title: '实时违法预警',
          icon: 'icon-weifachaxun',
          url: 'illegal'
        },
        {
          title: '实时事故预警',
          icon: 'icon-traffic',
          url: ''
        },
        {
          title: '综合研判分析',
          icon: 'icon-xianlu',
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
