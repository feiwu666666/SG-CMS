/*
 * @Author: Cyan_Breeze
 * @Description:
 * @Date: 2022-10-12 14:26:23
 * @LastEditTime: 2022-11-08 17:48:15
 * @FilePath: \vue3-cms\src\views\main\system\user\config\search.config.ts
 */
/**
 *@author:SJH
 *@description:关于SearchIForm里的item对象的相关配置
 *相关接口：base-ui中的IFormItem
 */
import { IForm } from '@/base-ui/form/index'
export const searchConfig: IForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },

  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        {
          title: '启用',
          value: 1
        },
        {
          title: '禁用',
          value: 0
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建日期',
      otherOptions: {
        startPlaceholder: ' 开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
