<template>
  <div class="base-info-control">
    <search-input title="车牌号码"></search-input>
    <info-card class="info-card"
               :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <span class="item-type">{{item.accidentType}}</span>
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">事故类型：</span>{{item.accidentType}}</p>
          <p class="item"><span class="item-title">事故原因：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">时间：</span>{{item.time}}</p>
          <p class="item"><span class="item-title">地点：</span>{{item.site}}</p>
        </div>
      </info-card-item>
    </info-card>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
// import { InfoCard, InfoCardItem } from '@/components/InfoCard'
import InfoCardItem from '@/components/InfoCard/InfoCardItem'
import InfoCard from '@/components/InfoCard/InfoCard'
export default {
  data () {
    return {
      height: 'calc(100% - 30px - 35px - 20px - 20px)',
      items: [
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          accidentType: '一般事故',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        }
      ]
    }
  },
  components: {
    SearchInput,
    InfoCardItem,
    InfoCard
  }
}
</script>
