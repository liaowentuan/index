<template>
    <div>
      <h3>面向对象</h3>
      <h3>类和对象的关系</h3>
      <pre>
        类就是创建对象的模板
        类 ： 苹果
        对象 ： 我口中的苹果
      </pre>
      <h3>类的构成</h3>
      <pre>
        类的名称： 类名
        类的属性： 一组数据
        类的方法： 类自带的方法
      </pre>
      <h3>定义类</h3>
      <pre>
        class 类名:
          方法列表

        class Car:
          # 方法
          def getCarInfo(self):
              print('车轮子个数:%d, 颜色%s'%(self.wheelNum, self.color))
          def move(self):
              print("车正在移动...")
      </pre>
      <h3>创建对象</h3>
      <pre>
        BMW = Car()
        BMW.color = '黑色'
        BMW.wheelNum = 4 #轮子数量
        BMW.getCarInfo()
        >>> 车轮子个数:4, 颜色黑色
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-class',
  data () {
    return {
      msg: 'this is python-class'
    }
  }
}
</script>

<style scoped>

</style>
