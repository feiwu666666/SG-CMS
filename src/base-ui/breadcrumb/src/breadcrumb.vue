<template>
  <div class="bread-crumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { myBreadCrumb } from '../types/index'
export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<myBreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    return { ArrowRight }
  }
})
</script>

<style scoped></style>
