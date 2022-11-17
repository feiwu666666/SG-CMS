<!--
 * @Author: Cyan_Breeze
 * @Description:对话框页面
 * @Date: 2022-11-15 16:55:26
 * @LastEditTime: 2022-11-16 21:30:56
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
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleClickConfirm">
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
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    // 从父组件中传来的另外的参数  用于组件自定义化
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    MyForm
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    const store = useStore()
    // 点击对话框中的确定后的逻辑
    const handleClickConfirm = () => {
      centerDialogVisible.value = false

      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log(props.otherInfo)

        store.dispatch('systemModule/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        console.log(props.otherInfo)

        store.dispatch('systemModule/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
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
      handleClickConfirm,
      centerDialogVisible,
      formData
    }
  }
})
</script>
<style scoped lang="less"></style>
