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
import mapMenusToRoutes from '@/utils/map-menus'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: {}
  },
  // 调用actions中的方法需要用store.dispatch("函数名",参数)调用  mutations方法需要使用store.commit("函数名",参数)调用
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登陆逻辑
      const accountResponse = await accountLoginRequest(payload)
      const { id, token } = accountResponse.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 2.获取user信息
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult.data)
      // console.log(userInfoResult.data)

      // 3.获取user权限对应的菜单
      const userMenuResult = await requestUserMenuByRoleId(id)
      const userMenus = userMenuResult.data
      commit('changeUserMenu', userMenus)
      localCache.setCache('userMenus', userMenus)
      router.push('/main')
      console.log('登陆成功')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
      }
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
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any) {
      for (const menu of userMenus) {
        menu.icon = menu.icon.replace('el-icon-', '')
      }
      state.userMenus = userMenus
      // 将menus => routes
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  getters: {},
  modules: {}
}

export default loginModule
