import { Service } from '..'
import { action } from 'mobx'

export class UserService extends Service {
  constructor(path: string = '/api') {
    super(path)
  }

  @action public async login(data: any = {}): Promise<any> {
    return this.post('/cube_base/userInfo/user_login', data)
  }

  @action public async getProfile(data: any = {}): Promise<any> {
    return this.get('/user/profile', data)
  }

  @action public async getUseList(data: any = {}): Promise<any> {
    return this.get('/cube_base/userInfo/user_list', data, true)
  }
  @action public async syncUser(data: any = {}): Promise<any> {
    return this.get('/cube_base/user_sync/syncUser', data, true)
  }

  @action public async fetchLogoList(data: any = []): Promise<any> {
    return this.get('/cube_base/logo/list', data)
  }

  @action public async getUserInfo(data: any = {}): Promise<any> {
    return this.get('/cube_base/userInfo/current_user', data)
  }

  @action public async sigout(data: any = {}): Promise<any> {
    return this.get('/cube_base/userInfo/user_logout', data)
  }
}

export default new UserService()
