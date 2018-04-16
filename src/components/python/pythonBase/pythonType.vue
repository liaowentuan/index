<template>
    <div>
      <h3>数据类型</h3>
      <pre>
        1. Numbers(数字)          - int(有符号的整型)
                                  - long(长整形[也可以代表八进制和十六进制])
                                  - float(浮点型)
                                  - complex(复数)

        2.布尔类型(区分大小写)    - True
                                  - False

        3.String(字符串)          'hello'   "world"

        4.List(列表)              []

        5.Tuple(元祖)             ()

        6.Dictionary(字典)        {}
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-type',
  data () {
    return {
      msg: 'this is python-type'
    }
  }
}
</script>

<style scoped>

</style>
