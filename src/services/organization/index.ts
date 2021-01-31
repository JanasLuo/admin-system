
import { Service } from '..'
import { action } from 'mobx'

export class OrganizationService extends Service {
  constructor(path: string = '/api/cube_base') {
    super(path)
  }

  @action public async officeInfoQuery(data: any = []): Promise<any> {
    return this.get('/officeInfo/query', data)
  }

  @action public async officeInfoDetail(data: any = []): Promise<any> {
    return this.get('/officeInfo/detail', data)
  }
  
  @action public async userSyncSyncUser(data: any = []): Promise<any> {
    return this.get('/user_sync/syncGroup', data)
  }
}

export default new OrganizationService()
