/*
 * @Descripttion: 全局事件总线 单例
 * @version:
 * @msg: 使用方式
 *   发布事件  eventBus.emit('selfEventName', data)
 *   订阅事件  eventBus.addListener('selfEventName', ()=>{})
 * @Author: luolei
 * @Date: 2020-09-11 09:53:07
 * @LastEditors: luolei
 * @LastEditTime: 2021-01-12 15:53:27
 */
import { EventEmitter } from 'events'
export default new EventEmitter()
