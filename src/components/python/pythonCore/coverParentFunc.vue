<template>
    <div>
      <h3>重写父类方法</h3>
      <pre>
        子类方法会覆盖父类方法，此为重写
        class Cat(object):
        def sayHello(self):
            print("halou-----1")
        class Bosi(Cat):
            def sayHello(self):
                print("halou-----2")
        bosi = Bosi()
        bosi.sayHello()
        >>> halou-----2
      </pre>
      <h3>super() 用于解决多继承的问题</h3>
      <pre>
        super 是用来解决多重继承问题的，直接用类名调用父类方法在使用单继承的时候没问题，但是如果使用多继承，会涉及到查找顺序（MRO）、重复调用（钻石继承）等种种问题。

        MRO 就是类的方法解析顺序表, 其实也就是继承父类方法时的顺序表

        class FooParent(object):
            def __init__(self):
                self.parent = 'I\'m the parent.'
                print ('Parent')

        def bar(self,message):
            print ("%s from Parent" % message)

        class FooChild(FooParent):
            def __init__(self):
                # super(FooChild,self) 首先找到 FooChild 的父类（就是类 FooParent），然后把类B的对象 FooChild 转换为类 FooParent 的对象
                super(FooChild,self).__init__()
                print ('Child')

        def bar(self,message):
            super(FooChild, self).bar(message)
            print ('Child bar fuction')
            print (self.parent)

        if __name__ == '__main__':
            fooChild = FooChild()
            fooChild.bar('HelloWorld')

        >>> Parent
        >>> Child
        >>> HelloWorld from Parent
        >>> Child bar fuction
        >>> I'm the parent.
      </pre>
    </div>
</template>

<script>
export default {
  name: 'cover-parent-func',
  data () {
    return {
      msg: 'this is cover-parent-func'
    }
  }
}
</script>

<style scoped>

</style>
