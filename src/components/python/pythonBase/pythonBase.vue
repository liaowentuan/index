<template>
    <div class="python-base page">
        <ul>
          <li><router-link to="/home/python/pythonBase/pythonType">python类型</router-link></li>
          <li><router-link to="/home/python/pythonBase/variable">变量</router-link></li>
          <li><router-link to="/home/python/pythonBase/Format">字符串格式化</router-link></li>
          <li><router-link to="/home/python/pythonBase/conversion">转换</router-link></li>
          <li><router-link to="/home/python/pythonBase/loop">循环</router-link></li>
          <li><router-link to="/home/python/pythonBase/string">字符串</router-link></li>
          <li><router-link to="/home/python/pythonBase/list">list列表(web 数组)</router-link></li>
          <li><router-link to="/home/python/pythonBase/tuple">tuple元祖(不可改数组)</router-link></li>
          <li><router-link to="/home/python/pythonBase/dictionary">dict字典(web对象)</router-link></li>
          <li><router-link to="/home/python/pythonBase/ergodic">遍历元素</router-link></li>
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
