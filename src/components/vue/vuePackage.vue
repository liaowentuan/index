<template>
    <div class="page">
      <h3>在项目文件夹里面运行以下命令</h3>
      <p>
            npm i element-ui -D -d
        <br>npm i axios -D -d
        <br>npm i echarts -D -d
        <br>npm i vuex -D -d
        <br>npm i js-base64 -D -d
        <br>npm i less less-loader -D -d
        <br>npm i font-awesome -D -d
      </p>
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
