<!--
 * @Author: Cyan_Breeze
 * @Description:玫瑰图的封装
 * @Date: 2022-11-20 19:45:43
 * @LastEditTime: 2022-11-21 12:03:26
 * @FilePath: \vue3-cms\src\components\page-echarts\src\rose-echart.vue
-->
<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

import { EChartsOption } from 'echarts'
import { IDataType } from '../types'

const props = defineProps<{
  roseData: IDataType[]
}>()

const options: EChartsOption = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    legend: {
      left: 'center',
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        // restore: { show: true },  还原玫瑰图
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '类别数据',
        type: 'pie',
        radius: [10, 100],
        center: ['60%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
