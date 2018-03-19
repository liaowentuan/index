<template>
  <div>
    <nav>
        <ul>
          <li><router-link to="/home/vueCliLearning/init"><span>init</span></router-link></li>
          <li><router-link to="/home/vueCliLearning/npmBuild"><span>npmBuild</span></router-link></li>
          <li><router-link to="/home/vueCliLearning/vuex"><span>vuex</span></router-link></li>
          <li><router-link to="/home/vueCliLearning/router"><span>router</span></router-link></li>
        </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'vue-cli-learning',
  data () {
    return {
      msg: 'vueCliLearning'
    }
  }
}
</script>

<style scoped lang="less">
nav{
  position: fixed;
  height: 100%;
  width: 150px;
  background: #2a50b1;
  .router-link-active{
    background: #424A60;
    width: 100%;
    color:white;
   }
  a{
      text-decoration: none;
      color:#fff;
      display: block;
      text-align: center;
      padding: 10px 0;
    }
}
main{
  margin-left: 150px;
}
</style>
