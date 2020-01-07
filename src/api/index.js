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

  //个人中心
  showAccount(id,data) {
    return request(MOBILE+'/showAccount/'+id,data, 'post')
  },

  
  
  
  
}

export default api
