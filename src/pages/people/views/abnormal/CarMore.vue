<template>
  <div class="illegal">
    <div class="search-start">
      <div class="item-title">
        数据更新时间: 2018-4-18 16:45:08
      </div>
      <el-form ref="form"
               :model="form"
               label-width="68px">
        <el-form-item label="领证机构">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计算周期">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="人员类型">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全部"
                       value="全部"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <info-card class="info-card"
               :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">身份证：</span>{{item.Idcard}}</p>
          <p class="item"><span class="item-title">领证时间：</span>{{item.time}}</p>
          <p class="item"><span class="item-title">驾驶证状态：</span>{{item.del}}</p>
          <p class="item"><span class="item-title">处理违法车辆数:</span>{{item.car}}</p>
          <p class="item"><span class="item-title">处理违法车辆总数:</span>{{item.acc}}</p>

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
      height: 'calc(100% - 350px)',
      form: {
        region: ''
      },
      items: [
        {
          name: '张威',
          Idcard: '320202199208284772',
          time: '2012-08-21',
          del: '正常',
          car: '322',
          acc: '2301 '
        }
      ]
    }
  },
  components: {
    InfoCardItem,
    InfoCard
  }
}
</script>

<style lang="stylus" scoped>
.search-start >>> .el-input__inner
  height 30px
.search-start >>> .el-form-item
  margin-bottom 10px
.item-title
  text-align center
  color #fff
.el-form
  padding 5px 0px
</style>
