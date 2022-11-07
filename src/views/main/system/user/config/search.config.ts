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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '爱好',
      placeholder: '请选择爱好',
      options: [
        {
          title: '篮球',
          value: 'basketball'
        },
        {
          title: '足球',
          value: 'football'
        }
      ]
    },
    {
      field: 'date',
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
