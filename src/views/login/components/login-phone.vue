<template>
  <div class="phone-login">
    <el-form
      label-width="60px"
      :model="phone"
      :rules="phone_rules"
      hide-required-asterisk
      ref="formRef"
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" clearable autofocus />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" type="text" size="small" />
          <el-button type="primary" class="get-btn" @click="send_btn_click"
            >发送验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { phone_rules } from '../config/login-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const phone = reactive({
      number: '',
      code: ''
    })
    const send_btn_click = () => {
      phone.code = '154535'
    }
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('loginModule/phoneLoginAction', { ...phone })
        } else {
          console.log('登陆失败')
        }
      })
    }
    return {
      phone,
      phone_rules,
      send_btn_click,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  width: 100px;
}
.el-input {
  margin-right: 20px;
}
</style>
