/*
 * @Author: Cyan_Breeze
 * @Description:表单和表单Item的接口
 * @Date: 2022-10-11 23:56:26
 * @LastEditTime: 2022-11-15 21:13:45
 * @FilePath: \vue3-cms\src\base-ui\form\types\index.ts
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 当type为select 时的option选项
  options?: any[]
  // 其他的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
}
