<template>
  <div class="page">
    <h3>懒加载</h3>
    <pre>
      ﹂src
        ﹂router
          ﹂index.js
      import vueDocs from '@/components/vue/vueDocs'
      改为:
      const vueDocs = (resolve) => {
        import('@/components/vue/vueDocs').then((module) => {
          resolve(module)
        })
      }
    </pre>
    <h3>or</h3>
    <pre>
      const vueInit = () => import('@/components/vue/vueInit')
    </pre>
    <h3>你要把零散的小文件组合成块文件？没问题</h3>
    <pre>
      const nginx = () => import(/* webpackChunkName: "group-nginx" */ '@/components/nginx/nginx')
      const wechatHttp = () => import(/* webpackChunkName: "group-nginx" */'@/components/nginx/wechat_http')
      const wechatHttps = () => import(/* webpackChunkName: "group-nginx" */'@/components/nginx/wechat_https')
    </pre>
    <div class="bottomBar">
        <router-link to="/home/vue/build" class="center"><span class="fa fa-angle-double-left"></span>&nbsp;<span>发布</span></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vue-layout'
}
</script>

<style scoped>

</style>
