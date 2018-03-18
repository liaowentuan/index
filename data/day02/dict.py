dic = {
  '1':"haha1",
  '2':"haha2",
  '3':"haha3",
  '4':"haha4"
}
print(type(dic.get("5"))) # 安全获取
del dic['1'] # 删除
dic.pop("2") # 删除
print(dic) # 无序打印 那么发給前端也是无序的么？

import random
print(random.random())

import time

time.sleep(3)
print('sleep')
