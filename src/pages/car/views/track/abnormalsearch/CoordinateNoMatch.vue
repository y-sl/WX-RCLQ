<template>
  <div class="not-travel">
    <info-card :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <span class="item-type">{{item.type}}</span>
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">事故原因：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">时间：</span>{{item.time}}</p>
          <p class="item"><span class="item-title">地点：</span>{{item.site}}</p>
        </div>
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
      height: 'calc(100% - 35px - 20px - 20px)',
      items: [
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        },
        {
          name: '张威',
          type: '非重点人员',
          accidentResult: '酒驾',
          time: '2018-11-19 10:21:21',
          site: '无锡市惠山区金汇路'
        }
      ]
    }
  }
}
</script>
