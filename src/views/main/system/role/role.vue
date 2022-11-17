<!--
 * @Author: Cyan_Breeze
 * @Description:角色页面
 * @Date: 2022-10-10 21:58:01
 * @LastEditTime: 2022-11-16 21:34:53
 * @FilePath: \vue3-cms\src\views\main\system\role\role.vue
-->
<template>
  <div class="role">
    <page-search :searchConfig="searchConfig"></page-search>
    <page-content
      :content-config="contentConfig"
      page-name="role"
      @click-edit-btn="handleClickEdit"
      @click-new-btn="handleClickNew"
    ></page-content>
    <page-modal
      :otherInfo="otherInfo"
      :modal-config="modalConfig"
      page-name="role"
      :default-info="defaultInfo"
      ref="pageModalRef"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          @check="handleClickCheckBox"
          :data="menu"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import pageContent from '@/components/page-content/src/page-content.vue'
import PageSearch from '@/components/page-search/src/page-search.vue'
import PageModal from '@/components/page-modal'

import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'

import { ElTree } from 'element-plus'
import { usePageModal } from '@/hooks/use-page-modal'

import { mapMenusToLeafKeys } from '@/utils/map-menus'

import { contentConfig } from './config/content.config'
import { searchConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  components: { pageContent, PageSearch, PageModal },
  name: 'role',
  setup() {
    //利用editCallBack函数获取当前编辑选项的数据
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (item: any) => {
      const leafKeys = mapMenusToLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, handleClickEdit, handleClickNew, defaultInfo] =
      usePageModal(undefined, editCallBack)
    const store = useStore()
    // 获取全部菜单
    const menu = computed(() => store.state.menuList)
    const otherInfo = ref({})
    // 点击复选框的逻辑
    const handleClickCheckBox = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      elTreeRef,
      otherInfo,
      handleClickCheckBox,
      menu,
      pageModalRef,
      handleClickEdit,
      handleClickNew,
      defaultInfo,
      contentConfig,
      searchConfig,
      modalConfig
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
