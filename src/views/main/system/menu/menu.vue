<template>
  <div class="menu">
    <page-content :content-config="menusConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { menusConfig } from './config/menu.config'
export default defineComponent({
  components: {
    PageContent
  },
  name: 'my-menu',
  setup() {
    return {
      menusConfig
    }
  }
})
</script>

<style scoped></style>
