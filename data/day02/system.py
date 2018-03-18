import sys # sys 模块是c语言写的
import os
print(sys.path)
print(sys.argv) # 可以接受参数
# print(sys.argv[2]) # 可以接受参数
os.popen("ls -l")
print("------->")
cmd = os.popen("ls -l").read()
print('-->',cmd)
sysRun = os.system("mkdir day00")
print('sysRun-->',sysRun)
if(sysRun==0):# 执行命令　　　执行成功，返回０　否则不是０
  print("OK")
else:
  print('error')
result = 1 if 1 else 0
print('三元运算' + str(result))
