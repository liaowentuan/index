import pymysql

conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='', db='jiaoyimao')

cur = conn.cursor()

cur.execute("SELECT * FROM baseData")
print(cur.execute("SELECT * FROM baseData"))

for r in cur.fetchall():
  print(r)

cur.close()

conn.close()
