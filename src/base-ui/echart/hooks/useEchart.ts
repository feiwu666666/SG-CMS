/*
 * @Author: Cyan_Breeze
 * @Description:配置echarts的钩子函数
 * @Date: 2022-11-20 13:31:41
 * @LastEditTime: 2022-11-21 11:59:25
 * @FilePath: \vue3-cms\src\base-ui\echart\hooks\useEchart.ts
 */
import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData as any)
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  // 当菜单栏缩进时， echart图表尺寸发生改变
  const updateSize = () => {
    echartInstance.resize()
  }
  // 当浏览器修改了大小之后 echart图表尺寸同样跟着改变
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    updateSize,
    setOptions
  }
}
