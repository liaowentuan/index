<template>
    <div class="page">
      <h3>1.安装node</h3>
      <p>可以直接到中文官网 <a href="http://nodejs.cn/">http://nodejs.cn/</a>下载安装包</p>
      <h3>2.安装脚手架</h3>
      <p>npm install -g vue-cli</p>
      <h3>3.查看vue版本</h3>
      <p>vue -V</p>
      <h3>4.构建项目</h3>
      <p>
        首先需要在命令行中进入到项目目录，然后输入:
        <br>
        vue init &lt;模板名&gt; &lt;项目名&gt;
        <br><br>
        &nbsp;&nbsp;&nbsp;例如：vue init webpack Vue-Project
        <br><br>
        然后进入项目目录（cd Vue-Project）,使用 npm 安装依赖
        <br>
        npm install
        <br>
      </p>
      <h3>5.试着运行</h3>
      <p>npm run dev</p>
      <div class="bottomBar">
        <router-link to="/home/vue/package" class="center"><span>npm包</span></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'vue-init',
  data () {
    return {
      msg: 'this is vue-init'
    }
  }
}
</script>

<style scoped>

</style>
