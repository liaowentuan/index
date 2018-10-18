// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App'
import store from './store/store'
import echarts from 'echarts'
import 'font-awesome/css/font-awesome.min.css'
import '../static/icomoon/style.css'
import './common/normalize.css'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = 'this is tokenId this is tokenId this is tokenId'
  config.headers.tokenId = '999999999999999999999999999999999999999999999999999995'
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.prototype.echarts = echarts

axios.defaults.baseURL = 'http://www.baidu.com/'
Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.Base64 = require('js-base64').Base64

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  echarts,
  components: { App },
  template: '<App/>'
})
