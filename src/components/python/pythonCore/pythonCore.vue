<template>
    <div class="python-Core page">
        <ul>
          <li><router-link to="/home/python/pythonCore/function">函数</router-link></li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'python-base',
  data () {
    return {
      msg: 'python-base'
    }
  }
}
</script>

<style scoped lang="less">
.page{
  ul{
    list-style: disc;
    li{
      margin: 0 25px;
      float: left;
    }
    border-bottom: 1px solid #ddd;
  }
  ul::after{
    content: '';
    display: table;
    clear: both;
  }
}
</style>
