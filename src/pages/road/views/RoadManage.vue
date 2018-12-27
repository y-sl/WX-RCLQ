<template>
  <div class="road-manage">
    <el-table :data="tableData">
      <el-table-column type="index" :index="0" label="序号" width="70"/>
      <el-table-column label="辖区" prop="area" width="70" />
      <el-table-column label="类型" prop="type" width="50" />
      <el-table-column label="名称" prop="name" width="130" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="text" @click="handleClick(scope.$index, scope.row)">治理情况</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          area: '锡山区',
          type: '路段',
          name: '解放大道'
        },
        {
          area: '锡山区',
          type: '路段',
          name: '解放大道'
        },
        {
          area: '锡山区',
          type: '路段',
          name: '解放大道'
        }
      ]
    }
  },
  methods: {
    handleClick (index, row) {
      console.log(index)
      console.log(row)
    }
  }
}
</script>

<style lang="stylus">
.el-table
  color #fff !important
  border 1px solid gray !important
  border-bottom none !important
  border-right none !important
  background-color gray !important
  &::before
    background-color gray !important
  thead
    color #fff !important
    th
      height 50px
  th, tr
    background-color #191d22
    cursor pointer
  td
    padding 5px 0
  th.is-leaf, td
    border-bottom-color gray !important
  .el-table__expanded-cell
    background-color gray
.el-table__body tr:hover > td
  background-color #08304a !important
</style>
