import axios from 'axios'
import Vue from 'vue'
import router from '../router'
const http = axios.create({
    baseURL:"",
    withCredentials:true,
    // headers:{"Access-Control-Allow-Origin":"*"}
    
})

http.interceptors.request.use(config  =>{
    // if (sessionStorage.token){
    //     config.headers.Authorization= 'Bearer '+ (sessionStorage.token||'')
    // }
    return config
},err =>{
    return Promise.reject(err)
})

http.interceptors.response.use(res =>{
    return res
},err=>{
    if(err.response){
        Vue.prototype.$message.error(err.response)
    }
    
    // if (err.response.status===401){

    return Promise.reject(err) 
})

export default function request (url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
      const options = {
        url,
        method
      }
      if (method.toLowerCase() === 'get') {
        options.params = data
      } else {
        options.data = data
      }
      http(options)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
          console.error(error)
        })
    })
  }