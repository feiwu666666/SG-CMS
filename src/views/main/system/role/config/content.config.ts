/*
 * @Author: Cyan_Breeze
 * @Description:PageContent的配置文件
 * @Date: 2022-11-06 23:19:51
 * @LastEditTime: 2022-11-14 17:46:30
 * @FilePath: \vue3-cms\src\views\main\system\role\config\content.config.ts
 */
export const contentConfig = {
  title: '角色列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100', slotName: 'name' },
    {
      prop: 'intro',
      label: '角色介绍',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'operation'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
