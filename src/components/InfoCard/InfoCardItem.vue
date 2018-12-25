<template>
  <div class="info-card-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.info-card-item
  position relative
  margin-bottom 10px
  padding 5px
  background-color #4a5661
  box-sizing border-box
  border-top 3px solid #4a5661
  cursor pointer
  &:last-child
    margin-bottom 0
  &:before
    position absolute
    content ' '
    width 100%
    height 3px
    top -3px
    left 0
    transform scale(0)
    background #2db398
    transition all 0.3s ease-in-out
  &:hover
    &:before
      transform scale(1)
</style>
