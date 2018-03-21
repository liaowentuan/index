import copy
list = ['person',['name','age',123]]

# 浅copy

l1 = list.copy()
l2 = list[:]
l3 = copy.copy(list)

# deep copy

l4 = copy.deepcopy(list)

print('\n',l1,'\n',l2,'\n',l3,'\n',l4)

