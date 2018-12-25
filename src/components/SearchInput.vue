<template>
  <div class="search-input">
    <input type="text"
           :placeholder="title">
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search-input
  position relative
  padding 0 15px
  background-color #4a5661
  border-radius 4px
  input
    width 100%
    height 30px
    background-color #4a5661
    color #fff
    &::placeholder
      color #fff
  .iconfont
    position absolute
    top 4px
    right 6px
    color #fff
  @media screen and (max-width: 1366px)
    .iconfont
      top 6px
</style>
