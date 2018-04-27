<template>
    <div class="page">
      <h3>删除文件夹</h3>
      <pre>
        sudo rm -rf 文件夹名            # 遍历删除整个文件夹
        sudo rm -rf 文件夹名/*          # 遍历删除文件夹，但是不删除文件夹本身
        sudo rm -rf !(文件名)           # 遍历删除当前目录的所有内容，但是不不包括括号内的文件
        sudo rm -rf !(文件名|文件名)    # 遍历删除当前目录的所有内容，但是不不包括括号内的多个文件
      </pre>
    </div>
</template>

<script>
export default {
  name: 'delete',
  data () {
    return {
      msg: 'this is delete'
    }
  }
}
</script>

<style scoped>

</style>
