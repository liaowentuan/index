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

<style>
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
.page{
  background: #fff;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
