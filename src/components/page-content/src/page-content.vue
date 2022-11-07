<!--
 * @Author: Cyan_Breeze
 * @Description:每一个子页面的内容页面
 * @Date: 2022-11-06 23:52:58
 * @LastEditTime: 2022-11-07 21:46:25
 * @FilePath: \vue3-cms\src\components\page-content\src\page-content.vue
-->
<template>
  <div class="content">
    <my-table :listData="dataList" v-bind="contentConfig">
      <template #headerHandler>
        <el-button type="primary" :icon="Plus">新建用户</el-button>
      </template>
      <!--
          2.表格中的插槽
          当需要对表格的部分列进行转换或者格式化时，可以通过插槽来匹配相应的列，然后根据需求再重写一遍插槽中的内容
        #enable是子组件插槽的name  scope是子组件当前关于row的一个对象 取出row对象，即可获得当前行的所有数据
        -->
      <template #enable="scope">
        <el-button :type="scope.row.enable ? 'primary' : 'danger'" plain>{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <!-- <strong>{{ new Date(scope.row.createAt).toLocaleString() }}</strong>   常规转换时间方式  下面用全局属性来实现时间转换-->
        <span>{{ $filters.formatTime(scope.row.createAt) }} </span>
      </template>
      <template #operation>
        <div class="operation">
          <el-button size="default" :icon="Edit" link type="primary"
            >编辑</el-button
          >
          <el-button size="default" :icon="Delete" link type="danger"
            >删除</el-button
          >
        </div>
      </template>
      <template #header></template>
      <template #footer></template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent, computed } from 'vue'
import { Edit, Delete, Plus } from '@element-plus/icons-vue'

import myTable from '@/base-ui/table'

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    myTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0, // 偏移量
        size: 10 // 每次请求的数据条数
      }
    })

    const dataList = computed(() =>
      store.getters['systemModule/pageListData'](props.pageName)
    )
    // const userCount = computed(() => {
    //   return store.state.systemModule.userCount
    // })
    return {
      dataList,
      Edit,
      Delete,
      Plus
    }
  }
})
</script>
<style scoped>
.content {
  margin: 0px 20px;
  border-top: 10px solid #f5f5f5;
}
</style>
