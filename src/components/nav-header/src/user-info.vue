<!--
 * @Author: Cyan_Breeze
 * @Description: 点击header栏的头像之后显示的页面
 * @Date: 2022-10-11 16:10:43
 * @LastEditTime: 2022-11-16 16:05:00
 * @FilePath: \vue3-cms\src\components\nav-header\src\user-info.vue
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="30" :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="User" disabled>
          <span>{{ store.state.loginModule.userInfo.name }}</span>
        </el-dropdown-item>
        <el-dropdown-item icon="HomeFilled" divided>个人空间</el-dropdown-item>
        <el-dropdown-item icon="Tools">系统设置</el-dropdown-item>
        <el-dropdown-item icon="CloseBold" divided @click="handleClickExit"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const circleUrl = ref(
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    )
    const store = useStore()
    const handleClickExit = () => {
      localStorage.removeItem('token')
      router.push('/login')
    }
    return { circleUrl, store, handleClickExit }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
