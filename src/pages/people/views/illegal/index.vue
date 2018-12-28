<template>
  <div class="illegal">
    <div class="search-start">
      <div class="item-title">
        数据更新时间: 2018-4-18 16:45:08
      </div>
      <el-form ref="form"
               :model="form"
               label-width="68px">
        <el-form-item label="采集机构">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
            <el-option label="全市"
                       value="全市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理机构">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
            <el-option label="全市"
                       value="全市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="人员类型">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="多少"
                       value="多少"></el-option>
            <el-option label="稍多"
                       value="稍多"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理状态">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
            <el-option label="全市"
                       value="全市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="缴款状态">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
            <el-option label="全市"
                       value="全市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="罚款金额">
          <el-select v-model="form.region"
                     placeholder="请选择">
            <el-option label="全省"
                       value="全省"></el-option>
            <el-option label="全市"
                       value="全市"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <info-card class="info-card"
               :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <span class="item-type">{{item.accidentType}}</span>
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">违法类型：</span>{{item.type}}</p>
          <p class="item"><span class="item-title">违法原因：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">时间：</span>{{item.time}}</p>
          <p class="item"><span class="item-title">死亡人数：</span>{{item.del}}</p>
          <p class="item"><span class="item-title">受伤人数：</span>{{item.car}}</p>
          <p class="item"><span class="item-title">地址：</span>{{item.acc}}</p>
          <p class="item"><span class="item-title">详情：</span>{{item.dil}}</p>

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
          accidentType: '吸毒人员',
          type: '嘻嘻',
          accidentResult: '哈哈',
          time: '2018-12-18',
          del: '1人',
          car: '0人',
          acc: '武汉 ',
          dil: '不详'
        },
        {
          name: '张威',
          accidentType: '吸毒人员',
          type: '嘻嘻',
          accidentResult: '哈哈',
          time: '2018-12-18',
          del: '1人',
          car: '0人',
          acc: '武汉 ',
          dil: '不详'
        },
        {
          name: '张威',
          accidentType: '吸毒人员',
          type: '嘻嘻',
          accidentResult: '哈哈',
          time: '2018-12-18',
          del: '1人',
          car: '0人',
          acc: '武汉 ',
          dil: '不详'
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
  width 330px !important
</style>
