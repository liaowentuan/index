<template>
    <div class="page">
      <h3>代理设置</h3>
      <pre>
        ﹂config
           ﹂index.js

              module.exports = {
                  dev: {
                    // Paths
                    assetsSubDirectory: 'static',
                    assetsPublicPath: '/',
                    proxyTable: { // 跨域配置代理
                      '/controller/': {
                        target: 'http://10.10.97.202',
                        changeOrigin: true,
                        pathRewrite: {
                          '^/controller': '/controller'
                        }
                      },
                      '/store/': {
                        target: 'http://10.10.97.202',
                        changeOrigin: true,
                        pathRewrite: {
                          '^/store': '/store'
                        }
                      }
                    },
                    host: '0.0.0.0', // 让项目让别的电脑也可以访问
                    port: 8080, // 修改端口
            改完后,重启项目    npm run dev
      </pre>
      <div class="bottomBar">
        <router-link to="/home/vue/use" class="left"><span class="fa fa-angle-double-left"></span>&nbsp;<span>配置包</span></router-link>
        <router-link to="/home/vue/build" class="right"><span>发布</span>&nbsp;<span class="fa fa-angle-double-right"></span></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'vue-proxy'
}
</script>

<style scoped>

</style>
