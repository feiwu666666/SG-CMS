/*
 * @Author: Cyan_Breeze
 * @Description:PageContent的配置文件
 * @Date: 2022-11-06 23:19:51
 * @LastEditTime: 2022-11-14 17:45:43
 * @FilePath: \vue3-cms\src\views\main\system\user\config\content.config.ts
 */
export const contentConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号',
      minWidth: '100',
      slotName: 'cellphone'
    },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
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
