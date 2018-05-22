<template>
    <div class="python-Core page">
        <ul>
          <li><router-link to="/home/python/pythonCore/function">函数</router-link></li>
          <li><router-link to="/home/python/pythonCore/recursion">递归函数</router-link></li>
          <li><router-link to="/home/python/pythonCore/file">文件操作</router-link></li>
          <li><router-link to="/home/python/pythonCore/class">面向对象</router-link></li>
          <li><router-link to="/home/python/pythonCore/classFunction">面向对象方法</router-link></li>
          <li><router-link to="/home/python/pythonCore/singleInheritance">对象单继承</router-link></li>
          <li><router-link to="/home/python/pythonCore/pythonMultiInherit">对象多继承</router-link></li>
          <li><router-link to="/home/python/pythonCore/coverParentFunc">重写父类方法</router-link></li>
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
