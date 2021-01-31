
import { Service } from '..'
import { action } from 'mobx'

export class InfopathService extends Service {
  constructor(path: string = '/api/cube_app') {
    super(path)
  }

  @action public async infoGroupQuery(data: any = []): Promise<any> {
    return this.get('/infoGroup/query', data)
  }

  @action public async infoGroup(data: any = []): Promise<any> {
    return this.post('/infoGroup', data)
  }

  @action public async modifyinfoGroup(data: any = []): Promise<any> {
    return this.put(`/infoGroup/${data.id}`, data)
  }

  @action public async cloaeInfoGroup(data: any = []): Promise<any> {
    return this.delete('/infoGroup', data)
  }

  @action public async formInfoQuery(data: any): Promise<any> {
    return this.get('/formInfo/query', data)
  }

  @action public async formInfoMoveGroup(data: any = []): Promise<any> {
    return this.put(`/formInfo/moveGroup?groupId=${data.groupId}&id=${data.id}`, data)
  }
}

export default new InfopathService()
