/*
 * @Author: Cyan_Breeze
 * @Description:一些映射menus中数据的函数
 * @Date: 2022-10-11 10:51:29
 * @LastEditTime: 2022-11-14 19:35:40
 * @FilePath: \vue3-cms\src\utils\map-menus.ts
 */
import { myBreadCrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
// 将菜单映射进路由中
export default function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //1. 默认加载所有的路由 allRoutes中存储了所有权限的菜单路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2.遍历用户菜单  通过其拥有的权限找到相应的route  并存入routes中
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (!firstMenu) firstMenu = menu
        if (route) routes.push(route)
      } else if (menu.type === 1) {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

/**
 *
 * @param usersMenus
 * @param currentPath
 * @description 通过当前页面的url找到相对应的menu对象
 * @returns menu
 */
export function pathMapToMenu(
  usersMenus: any[],
  currentPath: string,
  breadCrumbs?: myBreadCrumb[]
): any {
  for (const menu of usersMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name })
        breadCrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2) {
      if (menu.url === currentPath) {
        return menu
      }
    }
  }
}
// 通过当前路径  拼接出面包屑
export function pathMapToBread(userMenus: any[], currentPath: string) {
  const breadCrumbs: myBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadCrumbs)
  return breadCrumbs
}
// 通过menus 映射出用户的按钮权限
export function mapMenusToPermission(userMenus: any[]) {
  const permission: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permission
}
export { firstMenu }
