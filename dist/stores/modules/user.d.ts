export declare class UserStore {
  private isLogin
  private account
  constructor()
  get getIsLogin(): boolean
  getAccount(): any
  getAuthHeader(): any
  getAccessToken(): any
  login(accountInfo: any): void
  sigout(): void
}
declare const _default: UserStore
export default _default
