import axios from 'axios'
import qs from 'qs'
import { timeOut, withCredentials } from '../utils/config'

let instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: timeOut,
  withCredentials: withCredentials
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
    return Promise.reject(error)
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
    return Promise.reject(error)
  }
)

export default class Request {
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, params)
        .then(({ data }) => {
          if (data.code === 200) {
            const { result } = data
            resolve(result)
          } else {
            reject('failed')
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  static delete(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .delete(url, params)
        .then(({ data }) => {
          resolve(data)
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) })
        })
    })
  }

  static post(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params)
        .then(({ data }) => {
          resolve(data)
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) })
        })
    })
  }

  static put(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params)
        .then(({ data }) => {
          resolve(data)
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) })
        })
    })
  }

  static patch(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance
        .patch(url, params)
        .then(({ data }) => {
          resolve(data)
        })
        .catch(err => {
          reject({ err: JSON.stringify(err) })
        })
    })
  }
}
