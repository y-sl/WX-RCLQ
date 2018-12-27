<template>
  <div id="company"
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
          title: '企业管理',
          icon: 'icon-qiyeguanli',
          url: 'company'
        },
        {
          title: '背车预警',
          icon: 'icon-cheliangyujing',
          sub: [
            {
              title: '个人背车',
              url: 'personalcar'
            },
            {
              title: '同一法人',
              url: ''
            },
            {
              title: '同一地址',
              url: ''
            }
          ]
        },
        {
          title: '四色预警',
          icon: 'icon-yichangyujing',
          sub: [
            {
              title: '违法比例',
              url: ''
            },
            {
              title: '事故比例',
              url: ''
            },
            {
              title: '隐患比例',
              url: ''
            },
            {
              title: '逾期未检验比例',
              url: ''
            },
            {
              title: '报废率',
              url: ''
            }
          ]
        },
        {
          title: '综合研判分析',
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
