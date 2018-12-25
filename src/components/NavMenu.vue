<template>
  <div class="nav-menu">
    <div class="menu-container"
         ref="menu"
         v-for="(items, x) in menus"
         :key="x">
      <!-- 没有二级菜单 -->
      <router-link v-if="!items.sub"
                   :class="{'byclick': (x + '.' + 0 +'.' + 0) === index, 'noclick': (x + '.' + 0 +'.' + 0) !== index}"
                   @click.native="toggleBefore(x,0,0)"
                   :to="items.url">
        <i :class="'iconfont '+items.icon"></i><span v-text="items.title"></span>
      </router-link>
      <!-- 有二级菜单 -->
      <p class="first"
         @click="toggle1(x)"
         :class="{'arrowup': x === index1}"
         v-if="!!items.sub"><i :class="'iconfont '+items.icon"></i><span v-text="items.title"></span><i class="iconfont icon-icon"></i>
      </p>
      <!-- 二级菜单 -->
      <ul class="menu-list"
          :style="{height: x === index1 ? (items.sub.length * 45 + height) + 'px' : '0'}"
          v-if="items.sub">
        <li v-for="(item, y) in items.sub"
            :key="y">
          <!-- 没有三级菜单 -->
          <router-link v-if="!item.sub"
                       class="second-indent"
                       @click.native="toggleBefore(x,y,0)"
                       :class="{'byclick': (x + '.' + y +'.' + 0)=== index, 'noclick': (x + '.' + y +'.' + 0) !== index}"
                       :to="item.url">
            <span v-text="item.title"></span>
          </router-link>
          <!-- 有三级菜单 -->
          <a v-if="!!item.sub"
             class="second-indent"
             :class="{'menu-toggle':(y)===index2, 'arrowup': (y)===index2}"
             @click="toggle2(y,item.sub.length)">
            <span v-text="item.title"></span>
            <i class="iconfont icon-icon"></i>
          </a>
          <!-- 三级菜单 -->
          <div v-if="!!item.sub"
               class="menu-subcontainer"
               ref="menuSubcontainer"
               :style="{height: (y)===index2 ? (item.sub.length * 45) + 'px':'0'}">
            <ul>
              <li v-for="(sub,z) in item.sub"
                  :key="z">
                <router-link class="third-indent"
                             @click.native="toggleBefore(x,y,z)"
                             :class="{'byclick': (x + '.' + y +'.' + z) === index, 'noclick': (x + '.' + y +'.' + z) !== index}"
                             :to="sub.url"><i :class="'icon '+(sub.icon?sub.icon:'caret-right')"></i><span v-text="sub.title">{{sub.title}}11</span></router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      index: '',
      index1: '',
      index2: '',
      height: 0
    }
  },
  methods: {
    // 有无before伪类
    toggleBefore (x, y, z) {
      let xyz = x + '.' + y + '.' + z
      this.index = this.index === xyz ? '' : xyz
      this.$emit('routerShow', this.index === xyz)
    },
    toggle1 (index) {
      this.index1 = (this.index1 === index) ? '' : index
      this.height = 0
    },
    toggle2 (index, subLength) {
      this.index2 = (this.index2 === index) ? '' : index
      if (this.index2 === index) {
        this.height = subLength * 45
      } else {
        this.height = 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('../assets/iconfont/iconfont.css')
.nav-menu
  height calc(100% - 70px - 10px - 35px)
  padding-top 10px
  padding-bottom 35px
  background-color #191d22
  overflow-y scroll
  &::-webkit-scrollbar
    width 0px
  .menu-container
    width 100%
    a, p
      position relative
      display block
      width calc(100% - 20px - 20px)
      height 45px
      padding 0 20px
      color #fff
      line-height 45px
      cursor pointer
      transition all 0.3s
      &:before
        position absolute
        top 0px
        left 0px
        width 0px
        height 100%
        background-color #2db398
        content ''
      &.byclick
        background-color #23292e
        &:before
          width 4px
      &.noclick
        &:before
          width 0px
      &:hover
        background-color #23292e
        &:before
          width 4px
    @media screen and (max-width: 1366px)
      a, p
        width calc(100% - 15px - 15px)
        padding 0 15px
        &.byclick
          &:before
            width 3px
        &.noclick
          &:before
            width 0px
        &:hover
          &:before
            width 3px
    p, .second-indent
      .icon-icon
        position absolute
        right 12px
        top 2px
        width 18px
        transition transform 0.3s
        text-indent 0
      @media screen and (max-width: )
        .icon-icon
          width 14px
      &.arrowup
        .icon-icon
          transform rotate(180deg)
    .menu-list, .menu-subcontainer
      overflow hidden
      transition all 0.3s
    .menu-list
      .second-indent
        text-indent 25px
    .menu-subcontainer
      .third-indent
        text-indent 40px
@media screen and (max-width: 1366px)
  .second-indent
    text-indent 21px !important
  .third-indent
    text-indent 35px !important
</style>
