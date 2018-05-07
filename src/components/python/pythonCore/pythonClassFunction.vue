<template>
    <div>
      <h3>__init__ 初始化调用</h3>
      <pre>
        # 定义汽车类
        class Car:

            def __init__(self, newWheelNum, newColor):
                self.wheelNum = newWheelNum
                self.color = newColor

            def move(self):
                print('车在跑，目标:夏威夷')

        # 创建对象
        BMW = Car(4, 'green')

        print('车的颜色为:%s'%BMW.color)
        print('车轮子数量为:%d'%BMW.wheelNum)

        >>>车的颜色为:green
        >>>车轮子数量为:4
      </pre>
      <h3>__init__ 私有属性</h3>
      <pre>
        class People(object):

        def __init__(self, name):
            self.__name = name

        def getName(self):
            return self.__name

        def setName(self, newName):
            if len(newName) >= 5:
                self.__name = newName
            else:
                print("error:名字长度需要大于或者等于5")

        xiaoming = People("dongGe")

        xiaoming.setName("wanger")
        print(xiaoming.getName())
        >>> wanger

        xiaoming.setName("lisi")
        print(xiaoming.getName())
        >>> wanger # 需要大于5
        如果在属性名前面加了2个下划线'__'，则表明该属性是私有属性，否则为公有属性（方法也是一样，方法名前面加了2个下划线的话表示该方法是私有的，否则为公有的）
      </pre>
      <h3>__str__ 打印的时候调用</h3>
      <pre>
        class Car:

        def __init__(self, newWheelNum, newColor):
            self.wheelNum = newWheelNum
            self.color = newColor

        def __str__(self):
            msg = "颜色是" + self.color + ";" + int(self.wheelNum) + "个轮胎..."
            return msg

        BMW = Car(4, "白色")
        print(BMW)

        >>>颜色是白色;4个轮胎
      </pre>
      <h3>__del__ 计数器为0的时候才会调用(完全没有引用)</h3>
      <pre>
        class Animal(object):
          # 析构方法
          # 当对象被删除时，会自动被调用
          def __del__(self):
              print("%s对象马上被干掉了..."%self.__name)

        # 创建对象
        dog = Animal("哈皮狗")

        # 删除对象
        del dog
        >>> 哈皮狗对象马上被干掉了...

        cat = Animal("波斯猫")
        cat2 = cat
        cat3 = cat

        print("---马上 删除cat对象")
        del cat
        print("---马上 删除cat2对象")
        del cat2
        print("---马上 删除cat3对象")
        del cat3
        >>> ---马上 删除cat对象
        >>> ---马上 删除cat2对象
        >>> ---马上 删除cat3对象
        >>> 波斯猫对象马上被干掉了...
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-class-function',
  data () {
    return {
      msg: 'this is python-class-function'
    }
  }
}
</script>

<style scoped>

</style>
