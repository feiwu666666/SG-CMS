import { useStore } from 'vuex'

/*
 * @Author: Cyan_Breeze
 * @Description:查询page中相应的权限
 * @Date: 2022-11-14 19:42:45
 * @LastEditTime: 2022-11-14 23:17:19
 * @FilePath: \vue3-cms\src\hooks\use-permission.ts
 */
export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions: any[] = store.state.loginModule.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // !!(表达式) 可以将表达式结果转换成对应boolean值
  return !!permissions.find((item) => item === verifyPermission)
}
