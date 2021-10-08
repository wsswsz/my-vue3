import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import requestConfig from 'cfg/requestConfig'
import { ApiObj } from '@/types/request.interface'
import { HEADER_APPLICATION, HTTP_TIMEOUT, conmomParams } from 'cfg/index'


interface Queue {
  [prop: string]: boolean
}
class HttpRequest {
  public queue: Queue
  public constructor() {
    this.queue = {}
  }

  destroy(url: string) {
    if (this.queue[url]) {
      delete this.queue[url]
    }
  }

  requestError(res: any,url?: string) {
    console.log(`接口返回错误的url：${url}`)
    Promise.reject(res)
  }

  interceptor(instance: any, url?: string) {
    // Add a request interceptor
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (url) {
        this.queue[url] = true
      }
      if (url && url.includes("service")) { // process.env.NODE_ENV !== "development"
        const urlSplit = url.split("=")
        config.url = `${urlSplit[0]}=${encodeURI(urlSplit[0])}`
      }
      return config;
    }, function (error: any) {
      console.log("错误的url: " + error.response.config.url);
      return Promise.reject(error);
    });

    // Add a response interceptor
    instance.interceptors.response.use((res: AxiosResponse) => {
      if (url) {
        this.destroy(url)
      }
      const { data } = res
      if (/^[0]{1,}$/.test(data.respCode)) {
        return data;
      }
      return this.requestError(data, url)
    }, function (error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    });
  }

  async request(opts: AxiosRequestConfig) {
    const instance = axios.create()
    await this.interceptor(instance, opts.url)
    return instance(opts) // 发请求
  }
}

console.log(requestConfig)
/**
 * 目的是用FetchUrl.getXXData(params[, method])能发某个特定的请求，方法名在requestConfig文件里配置
 * 请求体在三个地方都可以配置一部分，公共请求参数、requestConfig里面配置data、FetchUrl.getXXData(params)
 */

 const mergeOpts = (opts: ApiObj, data?: any, method?:string) => {
  const _data = {...conmomParams, ...opts.data, ...data}
  const headers = {
    "Content-Type": HEADER_APPLICATION
  }
  const _opts = {
    url: opts.url,
    method: opts.method || data.method || method || 'GET',
    baseURL: opts.baseURL,
    ransformRequest: opts.transformRequest || [function (data: any) {
      // Do whatever you want to transform the data
      return data;
    }],
    headers,
    timeout: HTTP_TIMEOUT
  }
  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  // 如果是get请求URL入参是params，如果是其他请求，请求体是data
  return _opts.method !== 'GET'
   ? Object.assign(_opts, {data: _data})
   : Object.assign(_opts, {params: _data})
 }

 const HTTP = new HttpRequest()

 const Api = (() => {
  const apiObj: any = {}
  const fun = (opts: any) => {
    return async (data: any, method?: string) => {
      const options = mergeOpts(opts, data, method)
      const res = await HTTP.request(options)
      return res
    }
  }
  Object.keys(requestConfig).forEach((key: string) => {
    apiObj[key] = fun(requestConfig[key])
  })
  console.log(apiObj)
  return apiObj
 })()

 export default Api


