<!--
 * @Author: Cyan_Breeze
 * @Description:商品页面
 * @Date: 2022-10-10 22:01:33
 * @LastEditTime: 2022-11-14 16:13:53
 * @FilePath: \vue3-cms\src\views\main\product\goods\goods.vue
-->
<template>
  <div class="goods">
    <page-content :contentConfig="goodsConfig" pageName="goods">
      <template #img="scope">
        <el-image
          :src="scope.row.imgUrl"
          style="width: 60px; height: 60px"
          preview-teleported
          :preview-src-list="[scope.row.imgUrl]"
          hide-on-click-modal
        >
        </el-image>
      </template>
      <template #newPrice="scope">
        {{ '￥' + scope.row.newPrice }}
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { goodsConfig } from './config/goods.config'
export default defineComponent({
  components: {
    PageContent
  },
  name: 'goods',
  setup() {
    return {
      goodsConfig
    }
  }
})
</script>

<style scoped></style>
