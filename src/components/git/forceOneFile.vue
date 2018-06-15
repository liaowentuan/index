<template>
    <div class="page">
      <h3>取消某个文件的提交</h3>
      <pre>
        git status 先看一下add 中的文件
        git reset HEAD 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了
        git reset HEAD XXX.vue 就是对某个文件进行撤销了
      </pre>
    </div>
</template>

<script>
export default {
  name: 'force-one-file',
  data () {
    return {
      msg: 'this is force-one-file'
    }
  }
}
</script>

<style scoped>

</style>
