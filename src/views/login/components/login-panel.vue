<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="selected">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User class="el-tab-panel-icon" /></el-icon>
            <span class="text-span">账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone class="el-tab-panel-icon" /></el-icon>
            <span class="text-span">手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-if="selected === 'account'">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const selected = ref('account')
    const isKeepPassword = ref(true)
    //<InstanceType<typeof LoginAccount>>  获取LoginAccount导出的组件的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 如果accountRef为定义则不执行loginAction函数
    const handleLogin = () => {
      if (selected.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else if (selected.value === 'phone') {
        phoneRef.value?.loginAction()
      }
    }

    return {
      isKeepPassword,
      handleLogin,
      accountRef,
      selected,
      phoneRef
    }
  }
})
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
}

.login-panel {
  margin-bottom: 280px;
  width: 320px;
}
.text-span {
  padding-left: 5px;
  font-size: 16px;
}
.title {
  text-align: center;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 3px;
}
</style>
