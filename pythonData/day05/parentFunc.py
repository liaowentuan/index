#coding=utf-8
class Cat(object):
    def __init__(self, name):
        self.name = name
        self.color = 'yellow'


class Bosi(Cat):

    def __init__(self, name):
        # 调用父类的__init__方法1(python2)
        #Cat.__init__(self,name)
        # 调用父类的__init__方法2
        #super(Bosi,self).__init__(name)
        # 调用父类的__init__方法3
        super().__init__(name)

    def getName(self):
        return self.name

bosi = Bosi('xiaohua')
print(bosi.name)
print(Bosi.__mro__)
print(bosi.color)
