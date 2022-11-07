<template>
  <div class="nav-header">
    <el-icon size="25px" style="cursor: pointer" @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'" />
    </el-icon>
    <div class="content">
      <div><bread-crumb :bread-crumbs="breadCrumbs" /></div>
      <div><user-info /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import BreadCrumb from '@/base-ui/breadcrumb/index'
import { pathMapToBread } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  components: {
    UserInfo,
    BreadCrumb
  },
  emits: ['changeFold'],
  setup(props, { emit }) {
    // 通过用户菜单和当前url计算出面包屑  当userMenus和currentPath改变时需要重新计算breadCrumb 需要动态计算，所以采用computed方式计算
    const store = useStore()
    const route = useRoute()
    const breadCrumbs = computed(() => {
      const userMenus = store.state.loginModule.userMenus
      const currentPath = route.path
      return pathMapToBread(userMenus, currentPath)
    })

    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }
    return {
      isFold,
      handleFoldClick,
      breadCrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .content {
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
  }
}
</style>
