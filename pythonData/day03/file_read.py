f = open('yesterday3.txt','r',encoding='utf-8')

for i in range(5):
  print(f.readline())

f.close()
print('------>')

f = open('yesterday3.txt','r',encoding='utf-8')

for index,line in enumerate(f.readlines()):
  if index == 1:
    print('2')
  else:
    print(line.strip()) # 前后去除 换行 空格

f.close()

f = open('yesterday3.txt','r',encoding='utf-8')

print("高比个")

count = -1

for line in f:
  count += 1
  if count == 1:
    print("分割")
    continue
  print(line.strip())
