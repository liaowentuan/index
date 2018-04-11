from flask import Flask
from flask import request
app = Flask(__name__)


@app.route('/')
def index():
    return 'hello world'

@app.route('/login/', methods = ['GET','POST'])
def login():
    if request.method == 'GET':
        # if request.form['username'] == request.form['password']:
        #     return 'TRUE'
        # else:
#当form中的两个字段内容不一致时，返回我们所需要的测试信息
        return str(request.url)        #需要替换的部分

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='127.0.0.1', port=5000)
