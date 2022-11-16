/*
 * @Author: Cyan_Breeze
 * @Description: 基础的store
 * @Date: 2022-09-26 12:36:54
 * @LastEditTime: 2022-11-15 23:05:40
 * @FilePath: \vue3-cms\src\store\index.ts
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import loginModule from './login/login'
import systemModule from './main/system/system'
import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state: {
    name: '',
    age: 0,
    departmentList: [],
    roleList: []
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const department = await getPageListData('/department/list', {
        offset: 0,
        size: 10
      })
      const { list: departmentList } = department.data
      const role = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = role.data
      commit('changeDepartmentList', departmentList)
      commit('changeRoleList', roleList)
    }
  },
  modules: { loginModule, systemModule }
})
// 加载本地资源
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

// 自定义封装的useStore()函数  可以规定函数的返回值
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
