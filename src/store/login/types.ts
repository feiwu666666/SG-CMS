/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-09 16:38:05
 * @LastEditTime: 2022-11-14 22:33:32
 * @FilePath: \vue3-cms\src\store\login\types.ts
 */
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
