from flask import Flask, jsonify
   # 引入框架, json模块
from flask import make_response # 引入 自定义返回消息
from flask import request  # 引入request

import helloDef # 当前目录

app = Flask(__name__)
# 错误处理
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


@app.route('/controller/hello', methods=['POST'])
def hello():
    return helloDef.printMe(request), 201

@app.route('/controller/hello', methods=['GET'])
def hello2():
    return "hello", 201


if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='127.0.0.1', port=5000)
