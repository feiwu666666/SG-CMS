/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-11-17 10:46:20
 * @LastEditTime: 2022-11-17 12:43:43
 * @FilePath: \vue3-cms\src\store\analysis\dashboard.ts
 */
import { Module } from 'vuex'
import { IRootState } from '../types'
import { IDashboardState } from './types'

import {
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getCategoryGoodsCount,
  getAddressSale
} from '@/service/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [], //分类商品的数量
    categoryGoodsSale: [], // 商品的销量
    categoryGoodsFavor: [], // 商品收藏的数量
    addressGoodsSale: [] // 每个地方的销量
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      // 请求相关数据 并将state中的数据发生相应改变
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      const addressSale = await getAddressSale()
      commit('changeAddressGoodsSale', addressSale.data)
    }
  },
  getters: {}
}

export default dashboardModule
