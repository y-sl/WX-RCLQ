<template>
  <div id="road">
    <div class="nav-menu-wrapper">
      <div class="logo"></div>
      <div class="content">
        <div class="tab">
          <router-link to="/roadmanage"
                       class="road button"
                       :class="{active: isSelected}">
            <i class="iconfont icon-daoluguanli"></i>
            <span>黑点道路管理</span>
          </router-link>
          <router-link to="/layeranalyze"
                       class="analyze button">
            <i class="iconfont icon-layer"></i>
            <span>多层面分析</span>
          </router-link>
        </div>
        <router-view class="view"></router-view>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      isSelected: true,
      menus: [
        {
          title: '黑点道路'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import url('../../assets/iconfont/iconfont.css')
#road
  position relative
  height 100%
  padding-left 440px
  .nav-menu-wrapper
    width 440px
    height calc(100% - 70px)
    margin-left -440px
    background-color #ddd
    .logo
      width 100%
      height 70px
      background #2db398 url('../../assets/images/roadlogo.png') no-repeat center
    .content
      padding 10px
      height calc(100% - 20px)
      background-color #191d22
.router-link-active
  background-color #2db398 !important
  color #fff !important
.tab
  text-align center
  margin-bottom 20px
  .button
    display inline-block
    padding 10px 38px
    background-color #4a5661
    color #999
    text-align center
    line-height 1
    font-size 18px
    border-radius 5px
    cursor pointer
    &:nth-child(1)
      margin-right 10px
.view
  height calc(100% - 39px - 20px)
  // background-color #ccc
#map
  position absolute
  top 0
  left 440px
  width calc(100% - 440px)
  height 100%
  background-color #08304a
</style>
