<template>
  <div class="info-card"
       :style="{height:height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '0px'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.info-card
  margin 20px 0
  overflow-y scroll
  &::-webkit-scrollbar
    width 0px
</style>
