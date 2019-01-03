<template>
  <div class="car-line-warn big">
    <el-form :model="form"
             label-width="96px"
             label-position="left">
      <el-form-item label="起止时间">
        <el-date-picker v-model="form.timeRange"
                        type="daterange"
                        align="right"
                        size="small"
                        unlink-panels
                        value-format="yyyy-MM-DD"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="预警点位区划">
        <el-select placeholder="请选择"
                   v-model="form.area">
          <!-- <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option> -->
          <el-option label="北京烤鸭"
                     value="选项一"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
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
import InfoCardItem from '@/components/InfoCard/InfoCardItem'
import InfoCard from '@/components/InfoCard/InfoCard'
export default {
  data () {
    return {
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
      ],
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      height: 'calc(100% - 165px - 35px - 20px - 20px)',
      form: {
        timeRange: '',
        area: ''
      }
    }
  },
  components: {
    InfoCard,
    InfoCardItem
  }
}
</script>

<style lang="stylus">
.el-date-range-picker
  left 271px !important
</style>
