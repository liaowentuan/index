import json
from flask import jsonify
from flask import abort # 允许中断返回 400
import pymysql
from flask import make_response # 引入 自定义返回消息
from flask.ext.httpauth import HTTPBasicAuth

auth = HTTPBasicAuth()

def printMe(res):
    d = {'Name': 'Runoob', 'Age': 7, 'Class': 'First', 'status': 'true'}

    # 打开数据库连接
    db = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='', db='python3')

    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()

    # 使用 execute()  方法执行 SQL 查询
    cursor.execute("SELECT VERSION()")

    # 使用 fetchone() 方法获取单条数据.
    data = cursor.fetchone()

    print("Database version : %s " % data)

    # 关闭数据库连接
    db.close()
    print(res.data)
    if not res.json or not 'url' in res.json:
        abort(401)

    @auth.get_password
    def get_password(username):
      if username == 'admin':
        return '12345678'
      return None

    @auth.error_handler
    def unauthorized():
      return make_response(jsonify({'error': '权限不足'}), 401)

    info = """
        ----- user {0} -----
        usr:{0}
        upwd:{1}
        url:{2}
        """.format(res.json['user_name'], res.json['u_passwd'], res.json['url'])
    print(info)
    return json.dumps(d)
