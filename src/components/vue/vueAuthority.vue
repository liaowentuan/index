<template>
    <div class="page">
      <h3>权限控制/token的添加（安全系数高一点）</h3>
      <pre>
        ﹂main.js
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
        axios.interceptors.response.use((response) => {
          // 对响应数据做点什么
          return response
        }, function (error) {
          // 对响应错误做点什么
          if (error.toString().includes('401')) {
            window.location.href = '/#/login'
          }
          return Promise.reject(error)
        })
      </pre>
      <h3>权限控制/路由拦截</h3>
      <pre>
        1. 添加meta标签
        ﹂router
          ﹂index.js
        children: [
          {
            path: '/home/vue/init',
            meta: {role: ['superAdmin', 'web']},
            component: vueInit
          },

        2. 路由卫士拦截
        router.beforeEach((to, from, next) => {
          if (to['redirectedFrom']) { // 防止一级路由混乱
            let str = new RegExp(to['redirectedFrom'])
            if (str.test(from['fullPath']) === true) {
              next(from['fullPath'])
            }
          }
          if (to.matched.length === 0) {
            from.name ? next({name: from.name}) : next('/login')
          } else if (to.meta.role.includes(sessionStorage.getItem('ROLE'))) {
            // vuex 每次 F5 刷新的时候 都要重新 在sessionStorage里面获取值
            next()
          } else {
            next(false)
          }
        })

        3.nav的显隐
        li class="treeLi" v-if="'web superAdmin'.includes(role)"
        data () {
          return {
            role: sessionStorage.getItem('ROLE')
          }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'vue-authority',
  data () {
    return {
      msg: 'this is vue-authority'
    }
  }
}
</script>

<style scoped>

</style>
