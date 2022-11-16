/*
 * @Author: Cyan_Breeze
 * @Description: 封装modal的相关时间
 * @Date: 2022-11-15 19:07:13
 * @LastEditTime: 2022-11-15 21:22:35
 * @FilePath: \vue3-cms\src\hooks\use-page-modal.ts
 */
import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = () => void

export function usePageModal(
  newCallBack?: CallBackFn,
  editCallBack?: CallBackFn
): any[] {
  const defaultInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleClickNew = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    // 当newCallBack传入值时才调用该函数
    newCallBack && newCallBack()
  }
  const handleClickEdit = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    editCallBack && editCallBack()
  }

  return [pageModalRef, handleClickEdit, handleClickNew, defaultInfo]
}
