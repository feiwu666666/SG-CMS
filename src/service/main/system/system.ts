/*
 * @Author: Cyan_Breeze
 * @Description: 系统管理菜单中的一些网络请求
 * @Date: 2022-10-13 23:30:28
 * @LastEditTime: 2022-11-15 13:44:31
 * @FilePath: \vue3-cms\src\service\main\system\system.ts
 */
import myRequest from '../../index'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
// url  = /pageName/id
export function deletePageData(url: string) {
  return myRequest.delete<IDataType>({
    url: url
  })
}
