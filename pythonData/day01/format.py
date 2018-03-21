#!/usr/bin/env python3
user = input("用户名:")
upwd = input("密码:")
uage = input("年龄:")
if uage.isdigit():
  print("这是一个整数")
info = """
----- user {0} -----
usr:{0}
upwd:{1}
uage:{2}
""".format(user, upwd, uage)
print(info)

user = input("用户名2:")
upwd = input("密码2:")
uage = int(input("年龄2:"))
info2 = """
----- user {_user} -----
usr:{_user}
upwd:{_upwd}
uage:{_uage}
""".format(_user=user, _upwd=upwd, _uage=uage)
print(info2)
