/*
 * @Author: Cyan_Breeze
 * @Description: dashboard模块的state类型
 * @Date: 2022-11-17 10:47:34
 * @LastEditTime: 2022-11-17 10:50:17
 * @FilePath: \vue3-cms\src\store\analysis\types.ts
 */
export interface IDashboardState {
  categoryGoodsCount: any[] //分类商品的数量
  categoryGoodsSale: any[] // 商品的销量
  categoryGoodsFavor: any[] // 商品收藏的数量
  addressGoodsSale: any[] // 每个地方的销量
}
