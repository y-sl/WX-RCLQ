<template>
  <div>
    <info-card class="info-card"
               :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <!-- <span class="item-type">{{item.accidentType}}</span> -->
          <p class="item"><span class="item-title"></span>{{item.company}}</p>
          <p class="item"><span class="item-title">法人代表：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">身份证：</span>{{item.type}}</p>
          <p class="item"><span class="item-title">电话：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">地址: </span>{{item.time}}</p>
          <p class="item"><span class="item-title">车辆数: </span>{{item.del}}</p>
          <p class="item"><span class="item-title">违法车辆数: </span>{{item.ill}}</p>
          <p class="item"><span class="item-title">预警级别: </span>{{item.warning}}</p>
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
      height: 'calc(100% - 0px)',
      items: [{
        company: '海澜之家股份有限公司',
        name: '周建平',
        type: '320202196509323321',
        accidentResult: '400-8872-558',
        time: '无锡市江阴市新桥镇',
        del: '400',
        ill: '20',
        warning: '红色'
      },
      {
        company: '海澜之家股份有限公司',
        name: '周建平',
        type: '320202196509323321',
        accidentResult: '400-8872-558',
        time: '无锡市江阴市新桥镇',
        del: '400',
        ill: '20',
        warning: '红色'
      }, {
        company: '海澜之家股份有限公司',
        name: '周建平',
        type: '320202196509323321',
        accidentResult: '400-8872-558',
        time: '无锡市江阴市新桥镇',
        del: '400',
        ill: '20',
        warning: '红色'
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
