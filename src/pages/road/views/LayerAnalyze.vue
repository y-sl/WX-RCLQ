<template>
  <div class="layer-analyze">
    <Collapse>
      <collapse-item title="参数设置"
                     :index="0"
                     :selected="index"
                     @change="update"
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
                            v-model="time"
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
                     :selected="index"
                     @change="update"
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
                     :selected="index"
                     @change="update"
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

<script>
import Collapse from '@/components/collapse/Collapse'
import CollapseItem from '@/components/collapse/CollapseItem'
export default {
  components: {
    Collapse,
    CollapseItem
  },
  data () {
    return {
      index: -1,
      time: '',
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
  methods: {
    update (index) {
      this.index = Number(index)
    }
  }
}
</script>

<style lang="stylus">
.el-date-range-picker
  left 20px !important
.layer-analyze
  .el-form-item
    margin-bottom 13px !important
</style>
