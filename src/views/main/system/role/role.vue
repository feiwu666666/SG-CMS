<template>
  <div class="role">
    <page-search :searchConfig="searchConfig"></page-search>
    <page-content
      :content-config="contentConfig"
      page-name="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import pageContent from '@/components/page-content/src/page-content.vue'
import PageSearch from '@/components/page-search/src/page-search.vue'
import { defineComponent } from 'vue'
import { contentConfig } from './config/content.config'
import { searchConfig } from './config/search.config'

export default defineComponent({
  components: { pageContent, PageSearch },
  name: 'role',
  setup() {
    return {
      contentConfig,
      searchConfig
    }
  }
})
</script>

<style scoped></style>
