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
      <h3>数字运算</h3>
      <pre>
        运算符    描述                   实例
          +        加         两个对象相加 a + b 输出结果 30
          -        减         得到负数或是一个数减去另一个数 a - b 输出结果 -10
          *        乘         两个数相乘或是返回一个被重复若干次的字符串 a * b 输出结果 200
          /        除         x除以y b / a 输出结果 2
          //       取整除     返回商的整数部分 9//2 输出结果 4 , 9.0//2.0 输出结果 4.0
          %        取余       返回除法的余数 b % a 输出结果 0
          **       幂         返回x的y次幂 a**b 为10的20次方， 输出结果 100000000000000000000

          tips:
          9 // 2.0
          >>> 4
          9//2.9
          >>>3
          2**3
          >>> 8
          9%2
          >>> 1
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
