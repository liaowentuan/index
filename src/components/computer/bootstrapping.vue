<template>
    <div class="page">
      <h3>window程序自启动的方法</h3>
      <pre>
        1、按win+r，输入'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup'，回车确定；
        2、拖动需要自动启动的程序/快捷方式到该文件夹中，重启计算机即可。
      </pre>
    </div>
</template>

<script>
export default {
  name: 'bootstrapping',
  data () {
    return {
      msg: 'this is bootstrapping'
    }
  }
}
</script>

<style scoped>

</style>
