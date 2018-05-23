<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount () {
    sessionStorage.setItem('ROLE', 'web')
  }
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
      word-wrap:break-word;
      white-space:pre-wrap;
    }
  }
}
@media screen and (max-width:1024px){
  html{
    pre,p{
      word-wrap:break-word;
      white-space:pre-wrap;
    }
    background: #fff;
    .bottomBar{
      .center{
        display: block;
        text-align: center;
      }
      .left{
        float: left;
        text-align: left;
        width: 50%;
      }
      .right{
        display: inline-block;
        width: 50%;
        text-align: right;
      }
    }
  }
}
</style>
