<template>
  <div class="analyze">
    <Collapse>
      <collapse-item title="参数设置"
                     :index="0"
                     :selected="index2"
                     @change="update2"
                     icon="icon-hcm-set-copy">
        <el-form label-width="68px"
                 size="small">
          <el-form-item label="查询类别">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="起止日期">
            <el-date-picker type="daterange"
                            size="small"
                            v-model="value"
                            align="right"
                            unlink-panels
                            value-format="yyyy-MM-DD"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="领证机构">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </collapse-item>
      <collapse-item title="事故参数"
                     :index="1"
                     :selected="index2"
                     @change="update2"
                     icon="icon-traffic">
        <el-form label-width="68px"
                 size="small">
          <el-form-item label="领证机构">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车辆类型">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </collapse-item>
      <collapse-item title="违法参数"
                     :accordion="true"
                     :index="2"
                     :selected="index2"
                     @change="update2"
                     icon="icon-weifachaxun">
        <el-form label-width="68px"
                 size="small">
          <el-form-item label="采集机构">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="处理机构">
            <el-select v-model="value"
                       size="small">
              <el-option v-for="(item, index) of options"
                         :value="item.value"
                         :label="item.label"
                         :key="index"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </collapse-item>
    </Collapse>
  </div>
</template>

<script type="text/ecmascript-6">
// import { Collapse, CollapseItem } from "@/common/components/collapse/index";
import Collapse from '@/components/collapse/Collapse'
import CollapseItem from '@/components/collapse/CollapseItem'
// import DatePicker from 'vue2-datepicker'
export default {
  data () {
    return {
      time1: '',
      index2: -1,
      value: '',
      pickerOptions: {
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
      options: [
        {
          label: '全部',
          value: '全部'
        },
        {
          label: '北京烤鸭',
          value: '北京烤鸭'
        }
      ]
    }
  },
  components: {
    // DatePicker,
    Collapse,
    CollapseItem
  },
  mounted () {
    console.log(this.$refs.itemTitle)
  },
  methods: {
    update2 (index) {
      this.index2 = Number(index)
    }
  }
}
</script>
