import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'
import { message } from 'ant-design-vue'
import store from '@/store'

const baseURL: string = import.meta.env.VITE_BASE_API as string

const defaultOptions = {
  baseURL,
  timeout: 20000
}

const langCode = store.state.lang.code

class HttpRequest {
  private interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers[
          'Accept-Language'
        ] = `${langCode};q=0.9,en;q=0.8,en-GB;q=0.7,nl;q=0.6,und;q=0.5,ko;q=0.4,pt;q=0.3,zh-TW;q=0.2,cy;q=0.1`

        return config
      },
      (error) => {
        message.error(error)
        return Promise.reject(error)
      }
    )
    instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        message.error(error)
        return Promise.reject(error)
      }
    )
  }

  private mergeOptions(options: AxiosRequestConfig) {
    return { ...defaultOptions, ...options }
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance = Axios.create()
    options = this.mergeOptions(options)
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest()

export interface ResponseData {
  code: number
  msg: string
  data?: any
}
