<!--
 * @Author: Cyan_Breeze
 * @Description:饼状图封装
 * @Date: 2022-11-20 18:38:31
 * @LastEditTime: 2022-11-20 19:50:41
 * @FilePath: \vue3-cms\src\components\page-echarts\src\pie-echart.vue
-->
<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { EChartsOption } from 'echarts'
import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()

const options: EChartsOption = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
