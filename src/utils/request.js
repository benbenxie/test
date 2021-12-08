import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    store.commit('app/updateAjaxCount', 1)
    return config
  },
  error => {
    store.commit('app/updateAjaxCount', -1)
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    console.log(res.code)
    store.commit('app/updateAjaxCount', -1)
    // if (res.code && parseInt(res.code) !== 0) {
    //   let message = '网络请求错误，请稍后重试'
    //   if (res.msg !== '') {
    //     message = res.msg
    //   }
    //   Toast({ icon: 'warning-o', message: message, className: 'fail-tip', duration: 5000 })

    //   return Promise.reject(res || 'error')
    // } else {
    return Promise.resolve(res)
    // }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    Toast({ icon: 'warning-o', message: '网络请求超时，请稍后重试', className: 'fail-tip', duration: 5000 })
    store.commit('app/updateAjaxCount', -1)
    return Promise.reject(error)
  }
)

export default service
