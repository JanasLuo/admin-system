/*
 * @Descripttion:
 * @version:
 * @Author: liuhaoran
 * @Date: 2021-01-18 11:10:36
 * @LastEditors: liuhaoran
 * @LastEditTime: 2021-01-22 17:20:45
 */
import { Service } from '..'
import { action } from 'mobx'

export class AppService extends Service {
  constructor(path: string = '/api') {
    super(path)
  }

  @action public async fetchAppList(data: any = []): Promise<any> {
    return this.get('/cube_app/appInfo/query', data)
  }

  @action public async fetchDatasourceList(data: any = []): Promise<any> {
    return this.get('/cube_app/data_base/list', data)
  }

  @action public async createApp(data: any = {}): Promise<any> {
    return this.post('/cube_app/appInfo', data)
  }

  @action public async editApp(data: any = {}, id: number|undefined|string): Promise<any> {
    return this.put(`/cube_app/appInfo/${id}`, data)
  }

  @action public async fetchRoleList(data: any = {}): Promise<any> {
    return this.get(`/cube_app/appRole/queryById`, data)
  }

  @action public async createRole(data: any = {}): Promise<any> {
    return this.post(`/cube_app/appRole`, data)
  }

  @action public async editRole(data: any = {}, id: number | string): Promise<any> {
    return this.put(`/cube_app/appRole/${id}`, data)
  }

  @action public async fetchOfficeList(data: any = {}): Promise<any> {
    return this.get(`/cube_base/officeInfo/query`, data)
  }

  @action public async fetchUserList(data: any = {}): Promise<any> {
    return this.get(`/cube_base/officeInfo/user_list`, data)
  }

  @action public async addUser(data: any = []): Promise<any> {
    return this.post(`/cube_app/userInfoAppRole/patchAdd`, data)
  }

  @action public async fetchUserListByRoleId(data: any = {}): Promise<any> {
    return this.get(`/cube_app/userInfoAppRole/queryUser`, data)
  }

  @action public async deleteUser(data: any = []): Promise<any> {
    return this.delete(`/cube_app/userInfoAppRole/removeByUserId`, new Map(), data)
  }

  @action public async deleteRole(data: string | number ): Promise<any> {
    return this.delete(`/cube_app/appRole/${data}`)
  }

  @action public async getTbList(data: any = {} ): Promise<any> {
    return this.get(`/cube_app/data_base/tb/list`, data)
  }

  @action public async getTbSync(data: any = {} ): Promise<any> {
    return this.get(`/cube_app/data_base/tb/sync`, data)
  }

  @action public async getTbData(data: any = {} ): Promise<any> {
    return this.post(`/cube_magneto/ds/tb_data`, data)
  }

  @action public async getTbFields(data: any = {} ): Promise<any> {
    return this.get(`/cube_magneto/ds/tb_fields`, data)
  }

  @action public async getDbTableList(data: any = {} ): Promise<any> {
    return this.get(`/cube_app/db_table/list`, data)
  }

}

export default new AppService()
