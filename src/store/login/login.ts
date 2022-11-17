/*
 * @Author: Cyan_Breeze
 * @Description:登陆相关模块的store
 * @Date: 2022-10-07 11:13:20
 * @LastEditTime: 2022-11-17 10:32:00
 * @FilePath: \vue3-cms\src\store\login\login.ts
 */
import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'
import router from '@/router'
import mapMenusToRoutes, { mapMenusToPermission } from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: {},
    permissions: []
  },
  // 调用actions中的方法需要用store.dispatch("函数名",参数)调用  mutations方法需要使用store.commit("函数名",参数)调用
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登陆逻辑
      const accountResponse = await accountLoginRequest(payload)
      const { id, token } = accountResponse.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      dispatch('getInitialDataAction', null, { root: true })

      // 获取到了token时直接进行department和role的初始化  防止异步函数导致出现数据未加载情况
      // 2.获取user信息
      console.log(id)
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult.data)
      // console.log(userInfoResult.data)
      // {"id":177035594,"name":"logintest","realname":"logintest","cellphone":123123123123,"enable":1,"
      // createAt":"2022-11-17T01:48:40.000Z","updateAt":"2022-11-17T01:48:40.000Z","role":{"id":4,"name":"
      // 人事","intro":"人事管理","createAt":"2021-01-05T11:47:42.000Z","updateAt":"2021-01-05T11:50:11.000Z"},
      // "department":{"id":5,"name":"人事部","parentId":1,"createAt":"2021-01-02T10:04:02.000Z","updateAt":"
      // 2021-05-02T07:33:08.000Z","leader":"lily"}}

      // 3.获取user权限对应的菜单
      const userMenuResult = await requestUserMenuByRoleId(
        userInfoResult.data.role.id
      )
      const userMenus = userMenuResult.data
      console.log('userMenus' + userMenus)
      commit('changeUserMenu', userMenus)
      localCache.setCache('userMenus', userMenus)
      router.push('/main')
    },
    // 获取本地缓存
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
      }
      // 获取到了token时直接进行department和role的初始化  防止异步函数导致出现数据未加载情况
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('开始执行手机登陆程序', payload)
    // }
  },
  // 修改state数据需要在mutations中完成
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any[]) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any[]) {
      console.log(userMenus)
      for (const menu of userMenus) {
        menu.icon = menu.icon.replace('el-icon-', '')
      }
      state.userMenus = userMenus
      // 将menus => routes
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 用menus映射出user的permission按钮权限
      const permission = mapMenusToPermission(userMenus)
      state.permissions = permission
    }
  },
  getters: {},
  modules: {}
}

export default loginModule
