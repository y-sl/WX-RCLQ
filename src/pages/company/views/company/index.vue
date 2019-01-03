<template>
  <div class="company">
    <el-form ref="form"
             :model="form"
             label-width="68px">
      <el-form-item label="企业类型">
        <el-select v-model="form.region"
                   placeholder="请选择">
          <el-option label="全省"
                     value="全省"></el-option>
          <el-option label="全市"
                     value="全市"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属辖区">
        <el-select v-model="form.region"
                   placeholder="请选择">
          <el-option label="全省"
                     value="全省"></el-option>
          <el-option label="全市"
                     value="全市"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业车辆">
        <el-select v-model="form.region"
                   placeholder="请选择">
          <el-option label="多少"
                     value="多少"></el-option>
          <el-option label="稍多"
                     value="稍多"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业名称">
        <el-select v-model="form.region"
                   placeholder="请选择">
          <el-option label="全省"
                     value="全省"></el-option>
          <el-option label="全市"
                     value="全市"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <info-card class="info-card"
               :height="height">
      <info-card-item v-for="(item, index) of items"
                      :key="index">
        <div class="item-wrap">
          <!-- <span class="item-type">{{item.accidentType}}</span> -->
          <p class="item"><span class="item-title"></span>{{item.company}}</p>
          <p class="item"><span class="item-title">姓名：</span>{{item.name}}</p>
          <p class="item"><span class="item-title">电话：</span>{{item.type}}</p>
          <p class="item"><span class="item-title">地址：</span>{{item.accidentResult}}</p>
          <p class="item"><span class="item-title">所属辖区: </span>{{item.time}}</p>
          <p class="item"><span class="item-title">企业车辆: </span>{{item.del}}</p>
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
      items: [{
        company: '远东电缆有限公司',
        name: '将老板',
        type: '232323434',
        accidentResult: '武汉',
        time: '宜兴市',
        del: '233辆'
      }, {
        company: '远东电缆有限公司',
        name: '将老板',
        type: '232323434',
        accidentResult: '武汉',
        time: '宜兴市',
        del: '233辆'
      },
      {
        company: '远东电缆有限公司',
        name: '将老板',
        type: '232323434',
        accidentResult: '武汉',
        time: '宜兴市',
        del: '233辆'
      }]
    }
  },
  components: {
    InfoCardItem,
    InfoCard
  }
}
</script>

