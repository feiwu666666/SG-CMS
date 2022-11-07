<!--
 * @Author: Cyan_Breeze
 * @Description:子菜单列表的内容
 * @Date: 2022-10-10 21:53:59
 * @LastEditTime: 2022-11-07 22:20:54
 * @FilePath: \vue3-cms\src\views\main\system\user\user.vue
-->
<!-- v-mode="formData" 将formData绑定在myform上 -->
<template>
  <div class="user">
    <page-search :searchConfig="searchConfig" />
    <page-content :contentConfig="contentConfig" page-name="users" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
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
