import { IForm } from '@/base-ui/form'

/*
 * @Author: Cyan_Breeze
 * @Description:dialog对话框中的配置
 * @Date: 2022-11-15 15:57:01
 * @LastEditTime: 2022-11-16 18:50:36
 * @FilePath: \vue3-cms\src\views\main\system\role\config\modal.config.ts
 */
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemLayout: {}
}
