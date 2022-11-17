/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-07 11:07:46
 * @LastEditTime: 2022-11-16 17:58:12
 * @FilePath: \vue3-cms\src\store\types.ts
 */
import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  departmentList: any[]
  roleList: any[]
  menuList: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
