<template>
    <div class="python-variable">
        <h3>变量</h3>
        <pre>
          弱类型 和前端js一致

          不可使用关键字生命变量！！！
          import keyword
          print(keyword.kwlist)

          变量名由字母、下划线和数字组成，且数字不能开头
        </pre>
        <h3>全局变量</h3>
        <pre>
          a = 100

          def test1():
              print(a)

          >>> 100
        </pre>
        <h3>局部变量</h3>
        <pre>
          a = 100 # 全局变量

          def test1():
              a = 200 # 局部变量
              print(a)

          >>> 200
        </pre>
    </div>
</template>

<script>
export default {
  name: 'python-variable',
  data () {
    return {
      msg: 'python-variable'
    }
  }
}
</script>

<style scoped>

</style>
