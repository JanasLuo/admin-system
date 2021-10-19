import 'reflect-metadata'
interface HttpBase {
  http: any
  get(str: string, data: object, resolve: any): Promise<any>
  delete(str: string, data?: object, resolve?: any): Promise<any>
  put(str: string, data: object, resolve: any): Promise<any>
  post(str: string, data: object, resolve: any): Promise<any>
}
export declare class Service implements HttpBase {
  http: any
  ROOT_URL: string
  constructor(path: string)
  get(str: string, data: Map<string, any>, hideLoader?: boolean): Promise<any>
  delete(str: string, params?: Map<string, any>, data?: any): Promise<any>
  put(str: string, data: Map<string, any>, paramsUrl?: any): Promise<any>
  post(str: string, data: Map<string, any>): Promise<any>
  private reponseParamsCheck
}
declare const services: {}
export default services
