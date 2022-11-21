/*
 * @Author: Cyan_Breeze
 * @Description: 关于dashboard数据的相关网络请求
 * @Date: 2022-11-17 10:59:25
 * @LastEditTime: 2022-11-17 11:27:48
 * @FilePath: \vue3-cms\src\service\analysis\dashboard.ts
 */
import myRequest from '..'
import { IDataType } from '../types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressSale() {
  return myRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
