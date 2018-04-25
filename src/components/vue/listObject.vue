<template>
    <div class="page">
      <h3>数组对象的检测</h3>
      <pre>
        增加 || 改变值

        selectPic () {
          for (let i = 0; this.$refs.fileList.files.length > i; i++) {
            let r = new FileReader()
            r.onload = () => {
              this.$set(this.imgs, i, {}) // 让vue检测到长度变动
              this.$set(this.imgs[i], 'url', r.result) // 让vue检测到属性变动
            }
            r.readAsDataURL(this.$refs.fileList.files[i])// Base64
          }
          // this.imgs = arr
        }
        改进
        selectPic () {
          let len = this.$refs.fileList.files.length + this.imgs.length
          for (let i = this.imgs.length, c = 0; len > i; i++) {
            let r = new FileReader()
            r.onload = () => {
              this.$set(this.imgs, i, {})
              this.$set(this.imgs[i], 'url', r.result)
            }
            r.readAsDataURL(this.$refs.fileList.files[c])// Base64
            c++
          }
          this.$refs.fileList.value = null
        }

        删除值
        this.$delete(target, key)
        target (Array||Object)
      </pre>
    </div>
</template>

<script>
export default {
  name: 'list-object',
  data () {
    return {
      msg: 'this is list-object'
    }
  }
}
</script>

<style scoped>

</style>
