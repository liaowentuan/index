<template>
    <div class="page">
      <h3>使用依赖包</h3>
      <ul>
        <li>
          <h3>使用element-ui</h3>
          <pre>
            ﹂src
                ﹂main.js
              import ElementUI from 'element-ui'
              import 'element-ui/lib/theme-chalk/index.css'
              new Vue({
                el: '#app',
                router,
                store,
                echarts,
                components: { App },
                template: '&lt;App/&gt;'
              })
              Vue.use(ElementUI)
          </pre>
        </li>
        <li>
          <h3>使用 axios</h3>
          <pre>
          ﹂src
            ﹂main.js
          import axios from 'axios'
          请求拦截
              // 添加请求拦截器
                  axios.interceptors.request.use(function (config) {
                      // 在发送请求之前做些什么
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
          Vue.prototype.$http = axios
          </pre>
        </li>
        <li>
          <h3>使用echart</h3>
          <pre>
            ﹂src
              ﹂main.js
              import echarts from 'echarts'
              Vue.prototype.echarts = echarts

              new Vue({
                  el: '#app',
                  router,
                  store,
                  echarts,
                  components: { App },
                  template: '&lt;App/&gt;'
              })
          </pre>
        </li>
        <li>
          <h4>使用vuex</h4>
          <pre>
            ﹂src
              ﹂store # 创建文件夹
                  ﹂store.js # 创建该文件
                  import Vue from 'vue'
                  import Vuex from 'vuex'
                  import mutations from './mutations'  #引入文件
                  Vue.use(Vuex)

                  export default new Vuex.Store({
                    state: {
                      count: 0
                    },
                    mutations
                })
            ﹂src
              ﹂store # 创建文件夹
                ﹂mutations.js # 创建该文件

                const mutations = {
                    addition: state => state.count++,
                    minus: state => state.count--,
                    setZero: state => {
                      state.count = 0
                    }
                }
                export default mutations
          </pre>
        </li>
        <li>
          <h4>使用base64 (上传图片，本地显示)</h4>
          <pre>
            ﹂src
              ﹂main.js
            Vue.prototype.Base64 = require('js-base64').Base64
            语法
            this.Base64.encode('小飼弾');    // 5bCP6aO85by+
            this.Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

            this.Base64.decode('5bCP6aO85by+');  // 小飼弾
            // note .decodeURI() is unnecessary since it accepts both flavors
            this.Base64.decode('5bCP6aO85by-');  // 小飼弾
          </pre>
        </li>
        <li>
          <h4>使用less</h4>
          <pre>
            ﹂src
              ﹂webpack.base.conf.js
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
             }
          </pre>
        </li>
        <li>
          <h4>使用路由卫士(为了防止路由随意输入而设置错误返回)</h4>
          <pre>
            ﹂src
                ﹂router
                    ﹂index.js

            import Vue from 'vue'
            import Router from 'vue-router'
            import login from '@/components/login'
            Vue.use(Router)
            let routes = [
              {path: '/login',name: 'login',component: login}
            ]
            const router = new Router({
              history: true,
              routes: routes
            })
            router.beforeEach((to, from, next) => {
              if (to['redirectedFrom']) { // 防止一级路由混乱
                let str = new RegExp(to['redirectedFrom'])
                if (str.test(from['fullPath']) === true) {
                  next(from['fullPath'])
                }
              }
              if (to.matched.length === 0) { // 错误返回
                from.name ? next({ name: from.name }) : next('/login')
              } else {
                next()
              }
            })
            export default router
          </pre>
        </li>
        <li>
          <h4>使用图标字体font-awesome</h4>
          <pre>
            ﹂src
              ﹂main.js
            import 'font-awesome/css/font-awesome.min.css'
          </pre>
        </li>
      </ul>
      <div class="bottomBar">
        <router-link to="/home/vue/package" class="left"><span class="fa fa-angle-double-left"></span>&nbsp;<span>npm包</span></router-link>
        <router-link to="/home/vue/proxy" class="right"><span>代理</span>&nbsp;<span class="fa fa-angle-double-right"></span></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'vue-use',
  data () {
    return {
      msg: 'this is vue-use'
    }
  }
}
</script>

<style scoped>

</style>
