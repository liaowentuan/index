<template>
    <div>
      <h3>单继承</h3>
      <pre>
        # 定义一个父类，如下:
        class Cat(object):

            def __init__(self, name, color="白色"):
                self.name = name
                self.color = color

            def run(self):
                print("%s--在跑"%self.name)

        # 定义一个子类，继承Cat类如下:
        class Bosi(Cat):

            def setNewName(self, newName):
                self.name = newName

            def eat(self):
                print("%s--在吃"%self.name)

        bs = Bosi("印度猫")
        print('bs的名字为:%s'%bs.name)
        print('bs的颜色为:%s'%bs.color)
        bs.eat()
        bs.setNewName('波斯')
        bs.run()
        >>> bs的名字为：印度猫
        >>> bs的颜色为：白色
        >>> 印度猫——在吃
        >>> 波斯——在跑
      </pre>
      <h3>注意点</h3>
      <pre>
        子类在继承的时候，在定义类时，小括号()中为父类的名字
        父类的属性、方法，会被继承给子类
        私有的属性，不能通过对象直接访问，但是可以通过方法访问
        私有的方法，不能通过对象直接访问
        私有的属性、方法，不会被子类继承，也不能被访问
        一般情况下，私有的属性、方法都是不对外公布的，往往用来做内部的事情，起到安全的作用
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-single-inheritance',
  data () {
    return {
      msg: 'this is python-single-inheritance'
    }
  }
}
</script>

<style scoped>

</style>
