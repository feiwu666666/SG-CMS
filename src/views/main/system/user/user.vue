<!--
 * @Author: Cyan_Breeze
 * @Description:子菜单列表的内容
 * @Date: 2022-10-10 21:53:59
 * @LastEditTime: 2022-11-15 17:54:09
 * @FilePath: \vue3-cms\src\views\main\system\user\user.vue
-->
<!-- v-mode="formData" 将formData绑定在myform上 -->
<template>
  <div class="user">
    <page-search
      :searchConfig="searchConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="users"
      @click-edit-btn="handleClickEdit"
      @click-new-btn="handleClickNew"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { modalConfig } from './config/modal.config'
export default defineComponent({
  name: 'user',
  components: {
    PageModal,
    PageSearch,
    PageContent
  },
  setup() {
    const defaultInfo = ref({})
    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const handleClickEdit = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
    }
    const handleClickNew = () => {
      if (pageModalRef.value) {
        pageModalRef.value.centerDialogVisible = true
      }
    }
    return {
      defaultInfo,
      pageModalRef,
      handleClickEdit,
      handleClickNew,
      modalConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      searchConfig,
      contentConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  margin-top: 20px;
}
</style>
