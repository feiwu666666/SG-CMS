/*
 * @Author: Cyan_Breeze
 * @Description:关于SearchIForm里的item对象的相关配置
 * @Date: 2022-11-07 22:04:24
 * @LastEditTime: 2022-11-07 22:04:33
 * @FilePath: \vue3-cms\src\views\main\system\role\config\search.config.ts
 */
import { IForm } from '@/base-ui/form/index'
export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
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
