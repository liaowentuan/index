<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body,ul{
  margin: 0;
  padding: 0;
}
html{
  background: #F5F5FA;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
@media screen and (min-width:1024px){
  .page{
  background: #fff;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px 0 0 10px;
  min-height: 670px;
    pre,p{
      font-family: '宋体';
      font-size: 17px;
    }
  }
}
@media screen and (max-width:1024px){
  html{
    background: #fff;
  }
}
</style>
