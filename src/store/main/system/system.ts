/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-13 22:35:44
 * @LastEditTime: 2022-11-16 21:01:52
 * @FilePath: \vue3-cms\src\store\main\system\system.ts
 */
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    roleList: [],
    roleCount: 0,
    usersList: [],
    usersCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  },
  // mutations中的函数需要用commit调用
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  // 调用action 用dispatch
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      // let pageUrl = ''
      // 通过payload中传入的参数来确定Url的值  达到封装组件的效果
      // const pageUrl = `/${pageName}/list`  字符串拼接方式定义Url
      // 也可以用map的方式映射Url
      // 1. 通过pageName确定Url
      const pageUrl = `/${pageName}/list`
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      //2. 向后端发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      //3. 将申请到的数据存储到state中
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
      // switch (pageName) {
      //   case 'users':
      //     commit(`changeUsersList`, list)
      //     commit(`changeUsersCount`, totalCount)
      //     break
      //   case 'role':
      //     commit(`changeRoleList`, list)
      //     commit(`changeRoleCount`, totalCount)
      //     break
      // }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1. 拼接delete函数的url
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 2. 调用delete的网络请求
      await deletePageData(pageUrl)
      // 3. 重新请求pageList数据
      dispatch('getPageListAction', {
        pageName: pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      // 1. 拼接url
      const url = `/${pageName}`
      // 2. 发送网络请求
      console.log(newData)
      await createPageData(url, newData)
      // 3.重新获取pageList数据
      dispatch('getPageListAction', {
        pageName: pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      console.log(editData)
      await editPageData(pageUrl, editData)
      dispatch('getPageListAction', {
        pageName: pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    }
  }
}

export default systemModule
