import { IForm } from '@/base-ui/form'

/*
 * @Author: Cyan_Breeze
 * @Description:dialog对话框中的配置
 * @Date: 2022-11-15 15:57:01
 * @LastEditTime: 2022-11-15 18:00:59
 * @FilePath: \vue3-cms\src\views\main\system\user\config\modal.config.ts
 */
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    }
  ],
  colLayout: {
    span: 24
  },
  itemLayout: {}
}
