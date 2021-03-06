import os
import sys
import psycopg2

def connectPostgreSQL():
  conn = psycopg2.connect(database="postgres", user="postgres", password="postgres", host="127.0.0.1", port="5432")
  print( 'connect successful!')
  cur = conn.cursor()
  #    cur.execute('''CREATE TABLE COMPANY
  #           (ID INT PRIMARY KEY     NOT NULL,
  #           NAME           TEXT    NOT NULL,
  #           AGE            INT     NOT NULL,
  #           ADDRESS        CHAR(50),
  #           SALARY         REAL);''')
  cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
        VALUES (5, 'Paul', 32, 'California', 20000.00 )")

  cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
        VALUES (6, 'Allen', 25, 'Texas', 15000.00 )")

  cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
        VALUES (7, 'Teddy', 23, 'Norway', 20000.00 )")

  cur.execute("INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) \
        VALUES (8, 'Mark', 25, 'Rich-Mond ', 65000.00 )")

  conn.commit()
  conn.close()

if __name__=='__main__':
   connectPostgreSQL()
