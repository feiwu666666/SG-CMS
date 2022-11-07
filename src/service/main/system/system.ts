import myRequest from '../../index'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return myRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
