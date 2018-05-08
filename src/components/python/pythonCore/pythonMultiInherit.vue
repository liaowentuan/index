<template>
    <div>
      <!--eslint-disable-->
      <h3>对象多继承</h3>
      <h3>栗子</h3>
      <pre>
        # 定义一个父类
        class A:
            def printA(self):
                print('----A----')

        # 定义一个父类
        class B:
            def printB(self):
                print('----B----')

        # 定义一个子类，继承自A、B
        class C(A,B):
            def printC(self):
                print('----C----')

        obj_C = C()
        obj_C.printA()
        obj_C.printB()
        >>> ----A----
        >>> ----B----
      </pre>
      <h3>重复方法的栗子</h3>
      <pre>
        class base(object):
            def test(self):
                print('----base test----')
        class A(base):
            def test(self):
                print('----A test----')

        # 定义一个父类
        class B(base):
            def test(self):
                print('----B test----')

        # 定义一个子类，继承自A、B
        class C(B,A): # 先执行第一个参数的
            pass

        obj_C = C()
        obj_C.test()

        print(C.__mro__) #可以查看C类的对象搜索方法时的先后顺序
        >>>----B test----
        >>>(< class '__main__.C'>, < class '__main__.B'>, < class '__main__.A'>, < class '__main__.base'>, < class 'object'>)

        意思就是 先看C 再看B 再看A 再看base 最后看原生对象 如果有就触发
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-multi-inherit',
  data () {
    return {
      msg: 'this is python-multi-inherit'
    }
  }
}
</script>

<style scoped>

</style>
