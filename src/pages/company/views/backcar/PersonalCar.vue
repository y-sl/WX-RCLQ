<template>
  <div>
    <info-card class="info-card"
               :height=height>
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">身份证：</span>{{item.idcard}}</p>
          <p class="item"><span class="item-title">电话：</span>{{item.type}}</p>
          <p class="item"><span class="item-title">地址：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">个人背车数: </span>{{item.time}}</p>
          <p class="item"><span class="item-title">所有企业数: </span>{{item.del}}</p>
          <p class="item"><span class="item-title">公司注册数: </span>{{item.companyNumber}}</p>
        </div>
      </info-card-item>
    </info-card>
  </div>
</template>

<script>
import InfoCardItem from '@/components/InfoCard/InfoCardItem'
import InfoCard from '@/components/InfoCard/InfoCard'
export default {
  data () {
    return {
      height: '100%',
      items: [{
        name: '正韩剧',
        idcard: '2324348384',
        type: '323484384',
        accidentResult: '武汉',
        time: '23',
        del: '33',
        companyNumber: '3'
      }, {
        name: '正韩剧',
        idcard: '2324348384',
        type: '323484384',
        accidentResult: '武汉',
        time: '23',
        del: '33',
        companyNumber: '3'
      }]
    }
  },
  components: {
    InfoCardItem,
    InfoCard
  }
}
</script>

<style lang="stylus" scoped>
</style>
