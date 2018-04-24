<template>
    <div>
      <h3>函数的定义</h3>
      <pre>
        def 函数名():
          代码

        def test():
          print("hello world")
      </pre>
      <h3>调用</h3>
      <pre>
        函数名()

        test()
        >>>"hello world"
      </pre>
      <h3>查看函数</h3>
      <pre>
        help(函数名)
      </pre>
      <h3>带参函数</h3>
      <pre>
        def add2num(a, b):
          c = a+b
          print c
      </pre>
      <h3>调用带参数的函数</h3>
      <pre>
        add2num(2,3)
        >>> 5
      </pre>
      <h3>返回值</h3>
      <pre>
        def add2num(a, b):
          c = a+b
          return c
      </pre>
      <h3>获取返回值</h3>
      <pre>
        sum = add2num(2, 3)
        print(sum)
        >>> 5
      </pre>
      <h3>返回多个值(本质是利用了元祖)</h3>
      <pre>
        >>> def divid(a, b):
          ...     shang = a//b
          ...     yushu = a%b
          ...     return shang, yushu
          ...
          >>> sh, yu = divid(5, 2)
          >>> sh
          5
          >>> yu
          1
      </pre>
      <h3>默认值设定( 注意：带有默认值的参数一定要位于参数列表的最后面 )</h3>
      <pre>
        def printinfo( name, age = 35 ):
         # 打印任何传入的字符串
         print "Name: ", name

        # 调用printinfo函数
        printinfo(name="miki" )
        printinfo( age=9,name="miki" )
        以上实例输出结果：

        Name:  miki
        Age  35
        Name:  miki
        Age  9
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-function',
  data () {
    return {
      msg: 'this is python-function'
    }
  }
}
</script>

<style scoped>

</style>
