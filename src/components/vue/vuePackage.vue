<template>
    <div class="page">
      <h3>在项目文件夹里面运行以下命令</h3>
      <pre>
         npm i element-ui -D -d
         npm i axios -D -d
         npm i echarts -D -d
         npm i vuex -D -d
         npm i js-base64 -D -d
         npm i less less-loader -D -d
         npm i font-awesome -D -d
      </pre>
      <h3>解释</h3>
      <p>  i => install <br> -D => --save-dev <br> -S => --save (不推荐,因为项目移动后，重新安装包不在dev上面的话，会编译错误)</p>
      <div class="bottomBar">
        <router-link to="/home/vue/init" class="left"><span class="fa fa-angle-double-left"></span>&nbsp;<span>init</span></router-link>
        <router-link to="/home/vue/use" class="right"><span>配置包</span>&nbsp;<span class="fa fa-angle-double-right"></span></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'vue-package'
}
</script>

<style scoped>

</style>
