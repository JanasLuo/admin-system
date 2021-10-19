import { Service } from '..'
export declare class UserService extends Service {
  constructor(path?: string)
  login(data?: any): Promise<any>
  getProfile(data?: any): Promise<any>
  getUseList(data?: any): Promise<any>
  syncUser(data?: any): Promise<any>
  fetchLogoList(data?: any): Promise<any>
  getUserInfo(data?: any): Promise<any>
  sigout(data?: any): Promise<any>
}
declare const _default: UserService
export default _default
