<template>
    <div>
      <h3>文件操作</h3>
      <h3>打开文件</h3>
      <pre>
        f = open('test.txt', 'w')

        r     以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
        w     打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
        a     打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
        rb    以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。
        wb    以二进制格式打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
        ab    以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
        r+    打开一个文件用于读写。文件指针将会放在文件的开头。
        w+    打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
        a+    打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
        rb+   以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。
        wb+   以二进制格式打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。
        ab+   以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。
      </pre>
      <h3>文件关闭</h3>
      <pre>
        f.close()
      </pre>
      <h3>文件写入</h3>
      <pre>
        f = open('test.txt', 'w')
        f.write('hello world, i am here!')
        f.close()
      </pre>
      <h3>文件读取</h3>
      <pre>
        f = open('test.txt', 'r')
        content = f.read(5) # 读5个字
        content = f.read() # 读完
        print(content)
      </pre>
      <h3>文件读取和写入demo</h3>
      <pre>
        f1 = open('test.txt', 'r')
        content = f.read() # 读完

        f2 = open('test1.txt', 'w')
        f2.write(content)
        f1.close()
        f2.close()
      </pre>
      <h3>文件定位</h3>
      <pre>
        在读写文件的过程中，如果想知道当前的位置，可以使用tell()来获取
        f = open("test.txt", "r")
        str = f.read(3)
        position = f.tell()
        position
        >>> 3

        如果在读写文件的过程中，需要从另外一个位置进行操作的话，可以使用seek()
        f.seek(5,0) # 光标从0位置移动到5位置
        f.seek(-3,2) # 光标从0位置移动到倒数第三的位置
      </pre>
      <h3>文件重命名</h3>
      <pre>
        import os
        os.rename("人生如梦.txt", "人生如梦-最终版.txt")
      </pre>
      <h3>文件删除</h3>
      <pre>
        import os
        os.remove("人生如梦.txt")
      </pre>
      <h3>创建文件夹</h3>
      <pre>
        import os
        os.mkdir("张三")
      </pre>
      <h3>获取当前目录</h3>
      <pre>
        import os
        os.getcwd()
      </pre>
      <h3>改变默认目录</h3>
      <pre>
        import os
        os.chdir("../")
      </pre>
      <h3>获取目录列表</h3>
      <pre>
        import os
        os.listdir("./")
      </pre>
      <h3>删除文件夹</h3>
      <pre>
        import os
        os.rmdir("张三")
      </pre>
    </div>
</template>

<script>
export default {
  name: 'file',
  data () {
    return {
      msg: 'this is file'
    }
  }
}
</script>

<style scoped>

</style>
