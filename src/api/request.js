import axios from 'axios'
// import qs from 'qs'

let instance = axios.create({
  baseURL: 'https://api.apiopen.top/musicBroadcasting',
  timeout: 5000,
  withCredentials: false
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

export default {
  get(url, param) {
    instance({
      method: 'get',
      url,
      params: param
    })
      .then(res => {
        console.log(res.data.result)
        const { result } = res.data
        return Promise.resolve({
          success: true,
          ...result
        })
      })
      .catch(err => {
        return Promise.reject({
          success: false,
          message: err
        })
      })
  },
  post(url, param) {
    instance({
      method: 'post',
      url,
      data: JSON.stringify(param)
    })
      .then(res => {
        return Promise.resolve({
          success: true,
          ...res
        })
      })
      .catch(err => {
        return Promise.reject({
          success: false,
          message: err
        })
      })
  }
}
