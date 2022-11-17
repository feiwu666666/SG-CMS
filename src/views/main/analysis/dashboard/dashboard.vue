<!--
 * @Author: Cyan_Breeze
 * @Description:商品统计页面
 * @Date: 2022-10-10 22:00:10
 * @LastEditTime: 2022-11-16 22:36:22
 * @FilePath: \vue3-cms\src\views\main\analysis\dashboard\dashboard.vue
-->
<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echart from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    // 获取需要挂载echart的对象的dom元素
    const divRef = ref<HTMLElement>()
    // 当页面加载完就进行初始化
    onMounted(() => {
      // 对echart进行初始化
      // 第一个参数是挂载的dom对象， 第二个参数是主题， 第三个参数是渲染器 分为svg和canvas
      // 一般来说Canvas适合绘制图形数量大的图标，利于实现视觉特效
      // svg在大部分场景有优势，内存占用低，渲染性能高，缩放时不会模糊
      const echartInstance = echart.init(divRef.value!, 'light', {
        renderer: 'svg'
      })
      // 设置option数据 即表格数据
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        // 一些事件触发的特效
        tooltip: {
          // 触发的事件
          trigger: 'axis',
          // 当指向坐标时的特效
          axisPointer: {
            type: 'cross'
          }
        },
        //x轴
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },

        // 图例 默认存在  可手动设置先后
        legend: {
          // data: ['销量']
        },

        //y轴
        yAxis: {},
        // 数据
        series: [
          {
            //统计的名称
            name: '销量',
            // 统计图的类型
            type: 'bar',
            // 数据  需和坐标轴对应
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      echartInstance.setOption(option)
    })
    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
