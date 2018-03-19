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

<style scoped>
nav{
  position: fixed;
  height: 100%;
  width: 150px;
  background: red;
}
main{
  margin-left: 150px;
}
</style>
