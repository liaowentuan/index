names = ['zhangyang','guyun','guozi','helloworld']
print(names)
# 查
print(names[0])

print(names[1])

print(names[2])

print(names[1:3]) # 顾头不顾尾 切片
print(names[0:4]) # 顾头不顾尾 切片
print(names[:4]) # 顾头不顾尾 切片
names.append('leihaidong')

print(names[-3:-1])

print(names[-3:])
print(names)
# 增
names.insert(1,'insert')
print(names)
# 改
names[2]='xiedi'
print(names)
# 删除
names.remove('helloworld')
print(names)
del names[0]
print(names)
names.pop()
print(names)
names.pop(1)
print(names)

#####
print(names.index('insert'))
names.insert(1,'insert')
print(names)
print(names.count('insert')) # 查数目
names.reverse() # 翻转
print(names)
names.reverse() # 翻转
print(names)
names.sort()
print(names)
names2 = [1,2,3,4]
names.extend(names2)
print(names)
print(names2)
print(names)
names.clear()
names2.append([1,2,3])
names3 = names2.copy()
print(names3)
print(names2)
names2[2] = 99
names2[4][0]= 77
print(names3)
print(names2)

import copy
names3 =copy.deepcopy(names2) # 深克隆
