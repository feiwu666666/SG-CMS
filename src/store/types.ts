/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-07 11:07:46
 * @LastEditTime: 2022-11-20 19:38:59
 * @FilePath: \vue3-cms\src\store\types.ts
 */
import { IDashboardState } from './analysis/types'
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
  dashboardModule: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
