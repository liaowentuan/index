<template>
    <div class="page">
      <h3>window程序自启动的方法</h3>
      <pre>
        1、按win+r，输入'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup'，回车确定；
        2、拖动需要自动启动的程序/快捷方式到该文件夹中，重启计算机即可。
      </pre>
      <h3>win10 禁止开机自启动的方法</h3>
      <pre>
        1、win + r，输入'msconfig'，回车确定；
        2、点击菜单栏 '启动' 选项；
        3、点击'打开任务管理器' 的蓝色链接
        4、右键点击你要关闭的程序，选择'禁用'
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
