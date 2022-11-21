<!--
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-11-20 20:45:25
 * @LastEditTime: 2022-11-20 21:47:58
 * @FilePath: \vue3-cms\src\components\page-echarts\src\line-echart.vue
-->
<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { EChartsOption } from 'echarts'

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options: EChartsOption = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // legend: {},
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分别销量',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        // emphasis: {
        //   focus: 'series'
        // },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
