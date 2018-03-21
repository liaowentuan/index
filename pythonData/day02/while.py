i = 0
while i < 10:
  print(i)
  i+=1
else:
  print("i 等于 10")

arr = range(0,100,2)
print(arr)
for i in arr:
  if(i < 80):
    continue
  elif(i>=80):
    print(i)
else:
  print('range %s'%(i))
