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
    </div>
</template>

<script>
export default {
  name: 'vue-package'
}
</script>

<style scoped>

</style>
