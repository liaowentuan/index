<template>
    <div class="page">
        <h3>使用前准备</h3>
        <pre>
  为了让psycopg2兼容python3 下载二进制的psycopg2包
  pip install -U pip
  pip install psycopg2
        </pre>
        <h3>使用psycopg2包 另外还要install psycopg2-binary</h3>
        <pre>
#!/usr/bin/python3
# -*- coding:utf-8 -*-
import psycopg2.extras

def downloadOne(file_name,start_position,bigfile_size,bigfile_name,url,file_size):
    print(file_name,start_position,bigfile_size,url,file_size)
    f = open(file_name, 'wb') # 二进制 读写 覆盖式
    bigFile = open(bigfile_name,'rb') # 只读
    bigFile.seek(start_position,0)
    position = bigFile.tell()
    img= bigFile.read(file_size)
    f.write(img)
    f.close()
    bigFile.close()

def download(filename):
    conn = psycopg2.connect(database="filedb", user="postgres", password="postgres", host="10.10.92.233", port="5432")
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    sql = "select * from file_info2 WHERE file_name = \'%s\'"%(filename)
    cursor.execute(sql)
    answer = cursor.fetchone()
    if answer == None :
        print('不存在该数据')
    elif answer != None :
        id = answer[0]
        file_name = answer[1]
        file_size = answer[2]
        bigfile_name = answer[3]
        bigfile_size = answer[4]
        start_position = answer[5]
        end_position = answer[6]
        url = answer[7]
        root_url = answer[8]
        try:
            f = open(bigfile_name, 'r')
            f.close()
            downloadOne(file_name,start_position,bigfile_size,bigfile_name,url,file_size)
        except:
            print('当前目录缺少%s文件,请确认'%(bigfile_name))

    conn.commit()
    conn.close()


if __name__ == "__main__":
    download('qt=tile&x=0&y=-2&z=4&styles=pl&scaler=1&udt=20180131.png')
        </pre>
    </div>
</template>

<script>
export default {
  name: 'postgresql',
  data () {
    return {
      msg: 'postgresql'
    }
  }
}
</script>

<style scoped>

</style>
