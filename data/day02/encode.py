def code(str):
  print(str)
  print(str.encode('utf-8'))
  print(str.encode('utf-8').decode('utf-8'))


Str = '我爱北京天安门'

code(Str)
print('-----------')


Str = 'hello world'
code(Str)
