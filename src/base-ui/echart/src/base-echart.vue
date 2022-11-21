<!--
 * @Author: Cyan_Breeze
 * @Description:封装echart组件
 * @Date: 2022-11-17 13:05:32
 * @LastEditTime: 2022-11-21 10:36:28
 * @FilePath: \vue3-cms\src\base-ui\echart\src\base-echart.vue
-->
<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import useEchart from '../hooks/useEchart'

import { EChartsOption } from 'echarts'

// setup 定义props写法  以及默认参数
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '400px'
  }
)
// 获取需要挂载echart的对象的dom元素

const echartDivRef = ref<HTMLElement>()
// 挂载之后再创建实例 防止渲染延误
onMounted(() => {
  // 使用hook中的函数配置数据
  const { setOptions } = useEchart(echartDivRef.value!)
  // 当props数据发生改变时， 调用setOption函数
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
