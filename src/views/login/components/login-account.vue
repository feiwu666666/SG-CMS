<template>
  <div class="account-login">
    <el-form
      label-width="60px"
      :rules="account_rules"
      :model="account"
      hide-required-asterisk
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" clearable autofocus />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          clearable
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { defineComponent } from 'vue-demi'
import { account_rules } from '../config/login-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // 与form绑定得到form变量  然后获取form验证的结果

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('正在登陆')
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('loginModule/accountLoginAction', { ...account })
        } else {
          console.log('验证未通过')
        }
      })
    }
    return {
      account,
      account_rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.el-input {
  margin-right: 30px;
}
</style>
