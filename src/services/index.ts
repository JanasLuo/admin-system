import axios from 'axios'
import 'reflect-metadata'
import loaderStore, { LoaderStore } from '../stores/modules/loader'
import { message } from 'antd'
import user from '../stores/modules/user'
import Util from 'src/utils'
const CancelToken = axios.CancelToken
const source = CancelToken.source()
interface HttpBase {
  http: any
  get(str: string, data: object, resolve: any): Promise<any>
  delete(str: string, data?: object, resolve?: any): Promise<any>
  put(str: string, data: object, resolve: any): Promise<any>
  post(str: string, data: object, resolve: any): Promise<any>
}

class AxiosUtil {
  public static http: any
  public static loader: LoaderStore = loaderStore
  public static reqCount: number = 0
  public static isValidLogin: boolean = false

  public static getAxios(): any {
    if (!this.http) {
      this.http = axios
      this.http.timeout = 45000

      this.http.interceptors.request.use(
        (config: any) => {
          const hideLoader = config.data && config.data.hideLoader
          if (this.reqCount === 0 && !hideLoader) {
            this.loader.loaderStart()
          }

          config.headers.Authorization = `Bearer ${user.getAccessToken()}`
          config.headers.pageroute = window.location.href
          this.reqCount++
          return config
        },
        (error: any) => {
          this.reqCount--
          if (this.reqCount === 0) {
            this.loader.loaderEnd()
          }
          return Promise.reject(error)
        }
      )

      this.http.interceptors.response.use(
        (response: any) => {
          if (response.data.status === 302) {
            if (this.isValidLogin) {
              message.error('登录已经失效，请重新登录')
            }
            user.sigout()
            this.isValidLogin = false
            source.cancel('')
            window.location.href = response.data.redirectUrl
          } else {
            this.isValidLogin = true
            this.reqCount--
            if (this.reqCount === 0) {
              this.loader.loaderEnd()
            }
            return response
          }
        },
        (error: any) => {
          this.reqCount--
          if (this.reqCount === 0) {
            this.loader.loaderEnd()
          }
          if (error.response) {
            switch (error.response.status) {
              case 401:
              case 403:
              case 302:
                if (this.isValidLogin) {
                  message.error('登录已经失效，请重新登录')
                }
                user.sigout()
                this.isValidLogin = false
                source.cancel('')
                break
              default:
                break
            }
          }
          return Promise.reject(error)
        }
      )
    }
    return this.http
  }
}

export class Service implements HttpBase {
  public http: any
  public ROOT_URL: string

  constructor(path: string) {
    this.http = AxiosUtil.getAxios()
    this.ROOT_URL = path
  }

  public async get(
    str: string,
    data: Map<string, any>,
    hideLoader: boolean = false
  ): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .get(`${this.ROOT_URL}${str}`, {
          cancelToken: source.token,
          params: data || {},
          data: {
            hideLoader
          }
        })
        .then(this.reponseParamsCheck.bind(this, resolve, reject))
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async delete(
    str: string,
    params?: Map<string, any>,
    data?: any
  ): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .delete(`${this.ROOT_URL}${str}`, {
          params: params || {},
          data: data || {}
        })
        .then(this.reponseParamsCheck.bind(this, resolve, reject))
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async put(
    str: string,
    data: Map<string, any>,
    paramsUrl: any = ''
  ): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      let url
      if (paramsUrl) {
        const querry = Util.makeQuery(data)
        url = `${this.ROOT_URL}${str}${querry}`
      } else {
        url = `${this.ROOT_URL}${str}`
      }
      this.http
        .put(url, data)
        .then(this.reponseParamsCheck.bind(this, resolve, reject))
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  public async post(str: string, data: Map<string, any>): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .post(`${this.ROOT_URL}${str}`, data)
        .then(this.reponseParamsCheck.bind(this, resolve, reject))
        .catch((err: any) => {
          reject(err)
        })
    })
  }
  private reponseParamsCheck(resolve: any, reject: any, res: any) {
    if (!res) {
      reject('请求失败')
    }
    if (res.data.status === 200 && res.data.status === 200) {
      resolve(res.data)
    } else {
      const msg = res.data && (res.data.message || '请求失败')
      message.error(msg)
      resolve(
        res.data || {
          msg,
          status: 1
        }
      )
    }
  }
}

const servicesMap: any = require.context('./', true, /\.ts$/)
const services = {}

servicesMap.keys().forEach((key: string) => {
  if (key.indexOf('index.ts') > -1) {
    if (key.indexOf('./index.ts') === -1) {
      const tmpKey: string = key
        .replace('./', '')
        .replace('/index.ts', 'Service')
      services[tmpKey] = servicesMap(key).default
    }
  }
})

export default services
