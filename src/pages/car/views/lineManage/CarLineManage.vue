<template>
  <div class="analyze">
    <Collapse>
      <collapse-item title="参数设置"
                     :index="0"
                     :selected="index2"
                     @change="update2"
                     icon="icon-hcm-set-copy">
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>查询类别</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item date-picker'>
          <div class='item-lable lf'>
            <span>起止日期</span>
          </div>
          <!-- <date-picker v-model="time1"
                       width="100%"
                       range
                       input-class='dark-input mx-input'></date-picker> -->
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>领证机构</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>人员类型</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
              <option value="">精神病人</option>
              <option value="">涉疆涉藏</option>
              <option value="">吸毒人员</option>
              <option value="">酒驾醉驾</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>道路类型</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>道路代码</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>驾驶证号: </span>
          </div>
          <div class='item-select lf'>
            <select>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>排名方式: </span>
          </div>
          <div class='item-select lf'>
            <select>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>数据条数: </span>
          </div>
          <div class='item-select lf'>
            <select>
            </select>
          </div>
        </div>
      </collapse-item>
      <collapse-item title="事故参数"
                     :index="1"
                     :selected="index2"
                     @change="update2"
                     icon="icon-traffic">
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>处理机构</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value="">全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>车辆类型</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
              <option>公路客运</option>
              <option>旅游客运</option>
              <option>危险品运输车</option>
              <option>渣土车</option>
              <option>校车</option>
              <option>公交车</option>
              <option>出租测</option>
              <option>租赁车</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>交通方式</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>驾驶其他汽车</option>
              <option value='1'>乘三轮车</option>
              <option value='1'>乘自行车</option>
              <option value='1'>驾驶普通摩托车</option>
              <option value='1'>驾驶电动自行车</option>
              <option value='1'>驾驶轻便摩托车</option>
              <option value='1'>驾驶大型客车</option>
              <option value='1'>驾驶中型客车</option>
              <option value='1'>驾驶小型客车</option>
              <option value='1'>驾驶微型客车</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>事故原因</span>
          </div>
          <div class='item-select lf'>
            <select>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>受伤人数</span>
          </div>
          <div class='item-select lf'>
            <input type="number"
                   name="range"
                   min="0"
                   class="number-input1">
            <input type="number"
                   name="range"
                   min="0">
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>事故数量</span>
          </div>
          <div class='item-select lf'>
            <input type="number"
                   name="range"
                   min="0"
                   class="number-input1">
            <input type="number"
                   name="range"
                   min="0">
          </div>
        </div>
      </collapse-item>
      <collapse-item title="违法参数"
                     :accordion="true"
                     :index="2"
                     :selected="index2"
                     @change="update2"
                     icon="icon-weifachaxun">
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>采集机构</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>处理机构</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>领证机构</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>车辆类型</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value='1'>全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>违法行为</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value="">全部</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>执法方式</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value="">全部</option>
              <option value="">现场处罚-简易</option>
              <option value="">现场处罚-强措</option>
              <option value="">非现场执法</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>缴款状态</span>
          </div>
          <div class='item-select lf'>
            <select>
              <option value="">全部</option>
              <option value="">未缴款</option>
              <option value="">已缴款</option>
            </select>
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>罚款金额</span>
          </div>
          <div class='item-select lf'>
            <input type="text">
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>记分数</span>
          </div>
          <div class='item-select lf'>
            <input type="text">
          </div>
        </div>
        <div class='params-list-item'>
          <div class='item-lable lf'>
            <span>违法数量</span>
          </div>
          <div class='item-select lf'>
            <input type="number"
                   name="range"
                   min="0"
                   class="number-input1">
            <input type="number"
                   name="range"
                   min="0">
          </div>
        </div>
      </collapse-item>
    </Collapse>
    <div class="button-wrap">
      <button class="btn">
        <span>查询</span>
      </button>
    </div>
    <div class="analyze-table">
      <div class="table-title">
        <span class="result">结果展示</span>
      </div>
      <table>
        <tr>
          <th>序号</th>
          <th>辖区</th>
          <th>事故同比</th>
          <th>死亡同比</th>
          <th>受伤同比</th>
        </tr>
        <tr>
          <td>1</td>
          <td>滨湖区</td>
          <td>2210/1715<i class="up"></i></td>
          <td>21/5<i class="invariant"></i></td>
          <td>41/13<i class="down"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>锡山区</td>
          <td>3210/2715<i class="down"></i></td>
          <td>23/13<i class="down"></i></td>
          <td>32/16<i class="up"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>惠山区</td>
          <td>3620/2725<i class="down"></i></td>
          <td>30/10<i class="down"></i></td>
          <td>24/19<i class="up"></i></td>
        </tr>
        <tr>
          <td>4</td>
          <td>新吴区</td>
          <td>1304/715<i class="down"></i></td>
          <td>10/20<i class="up"></i></td>
          <td>14/6<i class="up"></i></td>
        </tr>
      </table>
    </div>
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
      index2: -1
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

<style lang="stylus">
input[type='number']
  width 48% !important
  float left
.date-picker
  overflow visible !important
.dark-input
  background-color #4a5661
  padding-left 8px
  border-radius 0
  border none
  color #fff
  &::placeholder
    font-size 16px
    color #999 !important
.mx-calendar-icon
  color #fff
  background-color #4a5661
</style>
