<!--
 * @Author: Cyan_Breeze
 * @Description:子菜单列表的内容
 * @Date: 2022-10-10 21:53:59
 * @LastEditTime: 2022-11-16 11:23:22
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
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :default-info="defaultInfo"
      page-name="users"
    ></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageModal,
    PageSearch,
    PageContent
  },
  setup() {
    const store = useStore()
    //1. 处理不显示表单部分的逻辑
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }
    //2. 动态添加部门列表和角色列表
    // 将获取state数据的函数放在computed中，当state数据更新时，computed会重新调用并且动态刷新当前组件
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      if (departmentItem?.options) {
        departmentItem.options = store.state.departmentList.map((item) => {
          return { title: item.name, value: item.id }
        })
      }

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      if (roleItem?.options) {
        roleItem!.options = store.state.roleList.map((item) => {
          return {
            title: item.name,
            value: item.id
          }
        })
      }
      return modalConfig
    })

    //3. 调用hook 获取公共变量和函数
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, handleClickEdit, handleClickNew, defaultInfo] =
      usePageModal(newCallBack, editCallBack)

    return {
      defaultInfo,
      pageModalRef,
      handleClickEdit,
      handleClickNew,
      modalConfigRef,
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
