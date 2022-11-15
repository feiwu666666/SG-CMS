<!--
 * @Author: Cyan_Breeze
 * @Description:对话框页面
 * @Date: 2022-11-15 16:55:26
 * @LastEditTime: 2022-11-15 18:10:08
 * @FilePath: \vue3-cms\src\components\page-modal\src\pageModal.vue
-->
<template>
  <div class="dialog">
    <el-dialog
      v-model="centerDialogVisible"
      title="添加用户"
      width="30%"
      align-center
      destroy-on-close
    >
      <my-form v-bind="modalConfig" v-model="formData"></my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MyForm
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    // 监控defaultInfo 当点击编辑， 自动将改行的数据填充到表单中
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    return {
      centerDialogVisible,
      formData
    }
  }
})
</script>
<style scoped lang="less"></style>
