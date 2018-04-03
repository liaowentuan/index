<template>
    <div class="page">
      <h3>发布项目</h3>
      <pre>
        修改发布路径

        ﹂config
            ﹂index.js
            build: {
                // Template for index.html
                index: path.resolve(__dirname, '../../facegateCompiled/index.html'), # 原始的 ../dist
                // Paths
                assetsRoot: path.resolve(__dirname, '../../facegateCompiled'),       # 原始的 ../dist
                assetsSubDirectory: 'static',
                assetsPublicPath: '/',
        npm run build
      </pre>
      <div class="bottomBar">
        <router-link to="/home/vue/proxy" class="left"><span class="fa fa-angle-double-left"></span>&nbsp;<span>代理</span></router-link>
        <router-link to="/home/vue/layout" class="right"><span>懒加载</span>&nbsp;<span class="fa fa-angle-double-right"></span></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'vue-build',
  data () {
    return {
      msg: 'this is vue-build'
    }
  }
}
</script>

<style scoped>

</style>
