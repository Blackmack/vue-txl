/**
 * Created by Administrator on 2018/3/23.
 * 请求封装
 */
import axios from 'axios'
import store from '../store/index'

// axios.defaults.timeout = 5000;
// 设置默认请求头
axios.defaults = {
  baseURL: '/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  timeout: 5000
}
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}


// http request 拦截
axios.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

// http response拦截
axios.interceptors.response.use(
  response => {
    console.log(response)
    return response;
  },
  error => {
    let errMsg = ''
    if (error.response) {
      switch (error.response.status) {
        case 400:
          errMsg = '客户端请求的语法错误'
          break
        case 401:
          errMsg = '未授权，请重新登录'
          break
        case 403:
          errMsg = '拒绝访问'
          break
        case 404:
          errMsg = '您所请求的资源无法找到'
          break
        case 408:
          errMsg = '客户端发送的请求时间超时'
          break
        case 500:
          errMsg = '服务器错误'
          break
        case 501:
          errMsg = '服务未实现'
          break
        case 502:
          errMsg = '网络错误'
          break
        case 503:
          errMsg = '服务不可用'
          break
        case 504:
          errMsg = '网络超时'
          break
        case 505:
          errMsg = 'HTTP版本不受支持'
          break
        default:
          errMsg = '连接服务器失败，错误码：' + error.response.status
      }
    }
    return Promise.reject({code:999,msg:errMsg}) // 返回接口返回的错误信息
  }
)

export default axios
