<template>
  <div class="card collapse-item"
       :class="{'collapse-open':isOpen}">
    <header class="card-header"
            @click="toggle">
      <span class="card-header-icon right">
        <i class="iconfont"
           :class="icon"></i>
      </span>
      <h3 class="card-header-title"
          v-text="title"></h3>
      <span class="card-header-icon left">
        <i class="iconfont icon-icon"></i>
      </span>
    </header>
    <div ref="content"
         class="card-content"
         :style="{height:height+'px'}">
      <div ref="contentbox"
           class="card-content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      require: true
    },
    selected: {
      type: Number,
      require: true
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      height: 0,
      isOpen: this.index === this.selected
    }
  },
  mounted () {
    this.togglehigh(this.isOpen)
  },
  watch: {
    selected (n, o) {
      console.log(n)
      console.log(o)
      let status = this.index === n
      this.togglehigh(status)
    }
  },
  methods: {
    togglehigh (status) {
      this.$refs.content.classList.remove('height-auto')
      setTimeout(() => {
        this.isOpen = status
        if (!status) {
          this.height = 0
        } else {
          this.height = this.$refs.contentbox.clientHeight
          setTimeout(() => {
            this.$refs.content.classList.add('height-auto')
          }, 300)
        }
      }, 0)
    },
    toggle () {
      // if (this.accordion) {
      //   let index = this.isOpen ? '-1' : this.index
      //   console.log('%cindex: ', 'color: #c3f805; font-size: 14px;', index)
      //   this.$emit('change', index)
      // } else {
      //   // not accordion
      //   let status = !this.isOpen
      //   this.isOpen = status
      //   this.togglehigh(status)
      // }
      let index = this.isOpen ? '-1' : this.index
      console.log('%cindex: ', 'color: #c3f805; font-size: 14px;', index)
      this.$emit('change', index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.collapse-item .card-header-icon
  transition transform 300ms
.collapse-item
  margin-bottom 10px
  cursor pointer
  .card-header
    position relative
    height 32px
    padding-left 30px
    padding-right 30px
    font-size 14px
    background-color #4a5661
    background-repeat no-repeat
    background-position 10px center
    cursor pointer
    border-radius 4px
  .card-header-title
    width 100%
    height 100%
    text-indent 5px
    font-weight normal
    line-height 32px
    color #fff
  .card-header-icon
    position absolute
    top 0
    width 30px
    height 32px
    font-size 14px !important
    text-align center
    line-height 32px
    &.right
      left 0
    &.left
      right 0
      transform rotate(-90deg)
    .iconfont
      margin-right 0
      color #fff
.collapse-item.collapse-open .card-header-icon
  transform rotate(0deg)
.collapse-item .card-content
  overflow hidden
  padding 0
  transition all 300ms
.collapse-item.collapse-open .card-content.height-auto
  overflow visible
  height auto !important
.collapse-item .card-content-box
  padding 10px 0 5px 0
</style>
