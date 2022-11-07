/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-13 22:35:44
 * @LastEditTime: 2022-11-07 23:03:34
 * @FilePath: \vue3-cms\src\store\main\system\system.ts
 */
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    roleList: [],
    roleCount: 0,
    usersList: [],
    usersCount: 0
  },
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
    }
  },
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
    }
  }
}

export default systemModule