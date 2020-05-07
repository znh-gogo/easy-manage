import request from './http'
import {MOBILE,ADMIN} from './globol'
// const global = 'http://localhost:3000';

const api = {
// 登陆注册
  find(data) {
    return request(ADMIN+'/find', data, 'get')
  },
  register(data) {
    return request('/api/register', data, 'post')
  },
  addAccount(data){
    return request('/api/addAccount', data, 'post')
  },
  updateAccount(data){
    return request('/api/updateAccount', data, 'post')
  },
  deleteAccount(data){
    return request('/api/deleteAccount', data, 'post')
  },
  //个人中心
  showAccount(data) {
    return request('/api/showAccountList',data, 'get')
  },

  
  
  
  
}

export default api
