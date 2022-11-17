/*
 * @Author: main 1657590770@qq.com
 * @Date: 2022-10-22 00:07:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-16 17:55:49
 * @FilePath: \vue3-cms\src\global\register-element.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 全局注册 element组件和图标

import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
  ElButton,
  ElForm,
  ElInput,
  ElTabPane,
  ElTable,
  ElTabs,
  ElSteps,
  ElStep,
  ElIcon,
  ElFormItem,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCard,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElInput,
  ElIcon,
  ElTabPane,
  ElTable,
  ElTabs,
  ElSteps,
  ElStep,
  ElFormItem,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCard,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
]

export function registerElement(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
