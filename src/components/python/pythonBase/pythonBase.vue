<template>
    <div class="python-base page">
        <ul>
          <li><router-link to="/home/python/pythonbase/pythonType">python类型</router-link></li>
          <li><router-link to="/home/python/pythonbase/variable">变量</router-link></li>
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
