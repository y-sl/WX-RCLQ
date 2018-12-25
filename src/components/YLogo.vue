<template>
  <div class="logo"
       :class="logo">

  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: 'car'
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  width 100%
  height 70px
  background-size 100%
  background-color #2db398
  background-position center
  &.car
    background-image url('../assets/images/carlogo.png')
  &.people
    background-image url('../assets/images/peoplelogo.png')
  &.road
    background-image url('../assets/images/roadlogo.png')
  &.company
    background-image url('../assets/images/companylogo.png')
</style>
