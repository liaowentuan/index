<template>
    <div class="page">
      <h3>window配置</h3>
      <pre>
        pip install virtualenv virtualenvwrapper-win

        【可选】Windows下默认虚拟环境是放在用户名下面的Envs中的，与桌面，我的文档，下载等文件夹在一块的。
        更改方法：计算机，属性，高级系统设置，环境变量，添加'变量名'WORKON_HOME，'变量值' e:\Envs\
      </pre>
      <h3>指令</h3>
      <pre>
        mkvirtualenv LST：创建运行环境LST

        workon TCL: 工作在 zqxt 环境 或 从其它环境切换到 TCL 环境

        deactivate: 退出终端环境

        其它的：

        rmvirtualenv ENV：删除运行环境ENV

        mkproject mic：创建mic项目和运行环境mic

        mktmpenv：创建临时运行环境

        lsvirtualenv: 列出可用的运行环境

        lssitepackages: 列出当前环境安装了的包

        创建的环境是独立的，互不干扰，无需sudo权限即可使用 pip 来进行包的管理。
      </pre>
    </div>
</template>

<script>
export default {
  name: 'virtualenv',
  data () {
    return {
      msg: 'virtualenv'
    }
  }
}
</script>

<style scoped>

</style>
