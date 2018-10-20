<template>
    <div class="page">
      <h3>配置pqsql</h3>
      <pre>
        ﹂mapService
          ﹂baiduMap
            views.py
        from django.http import HttpResponse
        from django.db import connection

        def index(request):
            SQL_str = "select * from user_info"
            # 游标
            cursor = connection.cursor()
            # 执行sql语句
            cursor.execute(SQL_str)
            # 获取返回值
            result = cursor.fetchall()
            # 关闭游标
            cursor.close()
            # if answer == None :
            return HttpResponse(result)

        ﹂mapService
          ﹂mapService
            settings.py

        # 请安装依赖 psycopg2
        # 为了让psycopg2兼容python3 下载二进制的psycopg2包
        # pip install -U pip
        # pip install psycopg2

        # 如果失败的话
        # sudo apt install pip3
        # pip3 install psycopg2
        # pip3 install psycopg2-binary

        DATABASES = {
            'default': {
                # 'ENGINE': 'django.db.backends.sqlite3',
                # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),

                'ENGINE': 'django.db.backends.postgresql_psycopg2',
                'NAME': 'postgres', # 数据库名称
                'USER':'postgres', # 用户名
                'PASSWORD':'123456', # 用户密码
                'HOST':'', # 默认的 127.0.0.1 或者 localhost
                'PORT':'5432', # 端口
            }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'pgsql',
  data () {
    return {
      msg: 'this is pgsql'
    }
  }
}
</script>

<style scoped>

</style>
