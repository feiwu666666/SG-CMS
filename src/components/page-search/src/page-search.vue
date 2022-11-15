<!--
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-13 22:09:06
 * @LastEditTime: 2022-11-08 20:12:19
 * @FilePath: \vue3-cms\src\components\page-search\src\page-search.vue
-->
<template>
  <div class="page-search">
    <my-form v-bind="searchConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button
            type="primary"
            :icon="Refresh"
            round
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            :icon="Search"
            round
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </my-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'

import MyForm from '@/base-ui/form/index'

export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    MyForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 1. 初始化搜索框的各种参数
    const formItems = props.searchConfig?.formItems ?? []
    const OriginFormData: any = {}
    for (const item of formItems) {
      OriginFormData[item.field] = ''
    }
    const formData = ref(OriginFormData)

    const handleResetClick = () => {
      for (const key in OriginFormData) {
        formData.value[key] = OriginFormData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
      console.log('clickSearch')
    }
    return {
      handleQueryClick,
      handleResetClick,
      formData,
      Search,
      Refresh
    }
  }
})
</script>
<style scoped>
.handle-btn {
  margin-bottom: 10px;
}
</style>
