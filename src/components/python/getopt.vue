<template>
    <div class="page">
        <h3>getopt 接受命令行参数</h3>
        <pre>
           try:  #  这里的 h 就表示该选项无参数，m:表示 m 选项后需要有参数
              opts, args = getopt.getopt(argv, "htcld:s:n:", ["help", "tar", "cat", "ls", "dist=", "src=", "name="])
           except getopt.GetoptError:
              print('        输入错误，请用 --help 或 -h 查询语法')
              sys.exit(2)

           for opt, arg in opts:
              if opt in ("-h", "--help"):
              showHelp()
              sys.exit()

              elif opt in ("-t", "--tar"):
                 src = None
                 name = None
                    for item in opts:
                       if item[0] in ("-s", "--src"):
                          src = item[1]
                       elif item[0] in ("-n", "--name"):
                          name = item[1]

                       if src == None:
                          print('缺少参数 -s ; --src')
                          sys.exit()

                       if name == None:
                          print('缺少参数 -n ; --name')
                          sys.exit()

                 merge(src, name)
                 print('合并成功!')
                 sys.exit()
        </pre>
    </div>
</template>
<script>
export default {
  name: 'python-getopt'
}
</script>

<style scoped>

</style>
