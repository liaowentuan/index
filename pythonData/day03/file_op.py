
'''
data = open('yesterday.txt', encoding='utf-8').read()
print(data)
'''

def fileCaozuo():
  f = open('yesterday.txt', 'r', encoding='utf-8') # 文件句柄

  data = f.read()
  data2 = f.read()     # 光标在最下面 所以无法读取

  print(data)
  print(data2)

  f = open('yesterday2.txt', 'w', encoding='utf-8') # 文件句柄

  f.write("wo ai bei jing\n tian an men")  # 每次都是覆盖写入

  f = open('yesterday3.txt', 'a', encoding='utf-8') # 追加       不可以大写

  f.write("\nwo ai bei jing tian an men\n")  # 每次都是append写入

  # data = f.read()
  # print(data)         不可以读

  f.close()

def errorsDetail():
  print('hello world')

if __name__ == '__main__':
  errorsDetail()
