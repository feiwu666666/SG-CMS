/*
 * @Author: Cyan_Breeze
 * @Description:菜单页面的配置参数
 * @Date: 2022-11-14 15:36:37
 * @LastEditTime: 2022-11-14 18:54:52
 * @FilePath: \vue3-cms\src\views\main\system\menu\config\menu.config.ts
 */
export const menusConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    {
      prop: 'type',
      label: '类型',
      minWidth: '60'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    { prop: 'icon', label: '菜单图标', minWidth: '80' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },

    {
      label: '操作',
      minWidth: '100',
      slotName: 'operation'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false
}
