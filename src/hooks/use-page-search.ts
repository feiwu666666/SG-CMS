/*
 * @Author: Cyan_Breeze
 * @Description: 用于页面查找的hook函数
 * @Date: 2022-11-08 19:15:10
 * @LastEditTime: 2022-11-14 20:13:13
 * @FilePath: \vue3-cms\src\hooks\use-page-search.ts
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch(): any[] {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
