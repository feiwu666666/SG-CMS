/**
 * 自定义验证账号登陆和手机号登陆的规则
 */
export const account_rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      message: '用户名为6-12位数字或者字母~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,16}$/,
      message: '密码为6-16位数字或者字母~',
      trigger: 'blur'
    }
  ]
}

export const phone_rules = {
  number: [
    {
      required: true,
      message: '手机号不能为空~',
      trigger: 'blur'
    },
    {
      pattern:
        /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
      message: '手机号不符合标准~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码为6位数字~',
      trigger: 'blur'
    }
  ]
}
