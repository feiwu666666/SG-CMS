import myRequest from '../index'
import { IAccount, LoginData } from './types'
import { IDataType } from '../types'
enum LoginAPI {
  AccountLogin = '/login',
  GetAccountData = '/users/',
  GetUserMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDataType<LoginData>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.GetAccountData + id,
    showLoading: false
  })
}

export function requestUserMenuByRoleId(id: number) {
  return myRequest.get<IDataType>({
    url: LoginAPI.GetUserMenu + id + '/menu',
    showLoading: false
  })
}
