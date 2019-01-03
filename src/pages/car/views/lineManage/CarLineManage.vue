<template>
  <div class="car-line-manange">
    <info-card :height='height'>
      <info-card-item>
        <p class="title">线路名称1</p>
        <p class="time">2018/2/19-2018/4/19</p>
      </info-card-item>
      <info-card-item>
        <p class="title">线路名称1</p>
        <p class="time">2018/2/19-2018/4/19</p>
      </info-card-item>
      <info-card-item>
        <p class="title">线路名称1</p>
        <p class="time">2018/2/19-2018/4/19</p>
      </info-card-item>
    </info-card>
  </div>
</template>

<script>
import { InfoCard, InfoCardItem } from '@/components/InfoCard'
export default {
  components: {
    InfoCard,
    InfoCardItem
  },
  data () {
    return {
      height: 'calc(100% - 35px - 20px - 20px)'
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  color #2db398
  margin-bottom 10px
  font-size 16px
.time
  color #fff
</style>
