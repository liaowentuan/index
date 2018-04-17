<template>
    <div>
      <h3>字符串</h3>
      <h3>输入 输出</h3>
      <pre>
        userName = input('请输入用户名:')
        print('hello world')
      </pre>
      <h3>字符串下标</h3>
      <pre>
        'world'
        0,1,2,3,4
        -5,-4,-3,-2,-1
      </pre>
      <h3>字符串切片</h3>
      <pre>
        切片的语法：[起始:结束:步长]
        注意：选取的区间属于左闭右开型，即从"起始"位开始，到"结束"位的前一位结束（不包含结束位本身)。

        name = 'abcdef'
        print(name[1:-1])
        >>> bcde
        总结： 含头不含尾
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-string',
  data () {
    return {
      msg: 'this is python-string'
    }
  }
}
</script>

<style scoped>

</style>
