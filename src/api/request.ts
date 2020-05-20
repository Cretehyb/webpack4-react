import axios from 'axios'
import qs from 'qs'
// import { timeOut, withCredentials } from '@/utils/config'

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
  // withCredentials: withCredentials
  // headers: {'Authorization' : AUTH_TOKEN}
})
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // token储存在header
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//添加一个请求拦截器
instance.interceptors.request.use(
  function(config) {
    //在请求发出之前进行一些操作
    return config
  },
  function(err) {
    //Do something with request error
    return Promise.reject(err)
  }
)
//添加一个响应拦截器
instance.interceptors.response.use(
  function(res) {
    //在这里对返回的数据进行处理
    return res
  },
  function(err) {
    //Do something with response error
    return Promise.reject(err)
  }
)

const Request = {
  get: (url: string, params = {}) => {
    return new Promise<any>((resolve, reject) => {
      instance
        .get(url, params)
        .then(({ data }) => {
          if (data.code === 200) {
            const { result } = data
            console.log(result, '请求结果')
            resolve(result)
          } else {
            reject('failed')
          }
        })
        .catch(err => {
          console.log({ err: JSON.stringify(err) })
        })
    })
  },
  post: (url: string, params = {}) => {
    return new Promise<any>((resolve, reject) => {
      instance
        .post(url, qs.stringify(params))
        .then(({ data }) => {
          resolve(data)
        })
        .catch(err => {
          console.log({ err: JSON.stringify(err) })
        })
    })
  }
}


export default Request
