<template>
    <div class="page">
      <pre>
      在window底下：
      在项目根目录底下：
      创建 .gitignore. 文件，创建成功后就是.gitignore文件

      使用sublime编辑它
      .DS_Store
      node_modules/
      /dist/
      npm-debug.log*
      yarn-debug.log*
      yarn-error.log*

      # Editor directories and files
      .idea
      .vscode
      *.suo
      *.ntvs*
      *.njsproj
      *.sln

      注意：
      有时候在项目开发过程中，突然心血来潮想把某些目录或文件加入忽略规则
      如果你在创建.gitignore文件之前就已经push项目了，那么即时你在.gitignore文件中写入新的规则，这些规则也不会起作用。

      先清缓存再提交一次就好了

      git rm -r --cached .
      git add .
      git commit -m 'update .gitignore'
      </pre>
    </div>
</template>

<script>
export default {
  name: 'gitignore',
  data () {
    return {
      msg: 'this is gitignore'
    }
  }
}
</script>

<style scoped>

</style>
