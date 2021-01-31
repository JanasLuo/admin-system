import { Service } from '..'
import { action } from 'mobx'

export class DataSourceService extends Service {
  constructor(path: string = '/api') {
    super(path)
  }

  @action public async getDataSourceList(data: any = {}): Promise<any> {
    return this.get('/cube_app/data_base/manage_list', data)
  }
  @action public async getOriginTypes(data: any = {}): Promise<any> {
    return this.get('/cube_app/data_base/origin_list', data)
  }
  @action public async linkTest(data: any = {}): Promise<any> {
    return this.post('/cube_app/data_base/test', data)
  }
  @action public async dataOriginAdd(data: any = {}): Promise<any> {
    return this.post('/cube_app/data_base/add', data)
  }
  @action public async getCurrentData(data: any = {}): Promise<any> {
    return this.get('/cube_app/data_base/info', data)
  }
}

export default new DataSourceService()
