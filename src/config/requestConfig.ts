// const MOCK_HOST: string = "https://rap3.tydiczt.cn:8002/app/mock/79";
import { MOCK_HOST, ISMOCK, HTTP_ROOT } from 'cfg/index'
import { ApiObj } from '@/types/request.interface'

const apiObj: ApiObj = {
  getBaseInfo: {
    url: "getBaseInfo",
    method: "GET"
  },
  getHistory: {
    url: "getHistoryApi",
    method: "POST"
  },
  getUserInfo: {
    url: "getUserInfo",
    method: "POST"
  }
}

export default (() => {
  Object.keys(apiObj).forEach((key: string) => {
    const baseURL: string = ISMOCK ? MOCK_HOST : "" + (apiObj[key].baseURL ||  HTTP_ROOT)
    console.log( apiObj[key].baseURL ||  HTTP_ROOT)
     apiObj[key].baseURL = baseURL
  })
  return apiObj
})()