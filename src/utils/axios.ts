import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'

const baseURL: string = import.meta.env.VITE_BASE_API as string

const defaultOptions = {
  baseURL,
  timeout: 20000
}

class HttpRequest {
  private interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (error) => Promise.reject(error)
    )
    instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error)
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
