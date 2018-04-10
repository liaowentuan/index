<template>
    <div class="page">
      <h3>脚本demo</h3>
      <!--eslint-disable-->
      <pre>
        #!/usr/bin/python3
        #coding:utf-8

        #
        #
        #
        #                       _oo0oo_
        #                      o8888888o
        #                      88" . "88
        #                      (| -_- |)
        #                      0\  =  /0
        #                    ___/`---'\___
        #                  .' \\|     |// '.
        #                 / \\|||  :  |||// \
        #                / _||||| -:- |||||- \
        #               |   | \\\  -  /// |   |
        #               | \_|  ''\---/''  |_/ |
        #               \  .-\__  '-'  ___/-. /
        #             ___'. .'  /--.--\  `. .'___
        #          ."" '<  `.___\_<|>_/___.' >' "".
        #         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
        #         \  \ `_.   \_ __\ /__ _/   .-` /  /
        #     =====`-.____`.___ \_____/___.-`___.-'=====
        #                       `=---='
        #
        #
        #     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        #
        #               佛祖保佑         永无BUG
        #

        import sys
        import getopt
        import os
        import psycopg2.extras
        import uuid

        def strBoth(string):
            string = "'" + str(string) + "'"
            return string

        def merge(s, n) :
            src = s
            name = n
            nameArray = name.split('/')
            srcArray = src.split('/')
            if(nameArray[0]!='.'):
                nameArray = ['.'] + nameArray

            if (srcArray[-1] == ''):
                srcArray = srcArray[:-1]
            src = '/'.join(srcArray)
            name = '/'.join(nameArray)
            out = '/'.join(nameArray[:-1])
            out = out + '/'
            big = nameArray[-1]
            try:
                os.makedirs(src)
                print('请确认%s目标文件夹是否是你想要压缩的文件夹'%(src))
                os.rmdir(src)
                sys.exit(2)
            except FileExistsError:
                print('')
            try:
                if os.path.isfile(name):
                    print('%s已经存在'%(name))
                    sys.exit(2)
                else:
                    tar(src, name, big, out)
            except FileExistsError:
                print('%s 目录地下有一个%s文件夹 '%(name, big))
                sys.exit(2)

        def tar (s, n, b, u) :
            psycopg2.extras.register_uuid()
            print('输入文件夹=', s, '大文件名,带路径=', n, '大文件名=', b, '输出文件夹=', u)
            src = s
            name = n
            bigfile_name = b
            conn = psycopg2.connect(database="filedb", user="postgres", password="postgres", host="10.10.92.233",port="5432")
            cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
            id = strBoth(uuid.uuid1())
            root_url = strBoth(u)
            sql = 'delete from file_info WHERE bigfile_name = %s' % (strBoth(bigfile_name))
            cursor.execute(sql)
            try:
                os.makedirs(u)
            except FileExistsError:
                print('')
            for fpathe,dirs,fs in os.walk(src):
                for f in fs:
                    id = strBoth(uuid.uuid1())
                    file_name = strBoth(f)
                    fsize = int(os.path.getsize(os.path.join(fpathe, f)))
                    url = os.path.join(fpathe,f)
                    file = open(os.path.join(fpathe,f),'rb')
                    img = file.read()
                    big_file = open(name,'ab')
                    start_position = int(big_file.tell())
                    big_file.write(img)
                    bigfile_size = int(big_file.tell())
                    big_file.close()
                    file.close()
                    bigfile_name = strBoth(b)
                    url = url[len(src)+1:]
                    url = strBoth(url)
                    sql = 'INSERT INTO file_info (id, file_name, file_size, bigfile_name, bigfile_size, start_position, url, root_url) VALUES (%s, %s, %d, %s, %d, %d, %s, %s);'%(id, file_name, fsize, bigfile_name , bigfile_size, start_position, url, root_url)
                    cursor.execute(sql)
            conn.commit()
            conn.close()


        def downloadOne(filename, start_position, urlBigFile, DBurl, file_size, output, bFName):
            outputdir = output.split('/')
            if outputdir[0]!= '.':
                output = './' + output
            if outputdir[-1] != '':
                output = output + '/'
            realUrl = output + filename
            if os.path.isfile(realUrl):
                print('%s已经存在' % (realUrl))
                sys.exit(2)
            try:
                realUrlArray = realUrl.split('/')
                makeurl = '/'.join(realUrlArray[:-1]) + '/'
                os.makedirs(makeurl)
            except FileExistsError:
                print('已经存在不用创建')
            f = open(output + filename, 'wb') # 二进制 读写 覆盖式
            bigFile = open(urlBigFile,'rb') # 只读
            bigFile.seek(start_position,0)
            img = bigFile.read(file_size)
            f.write(img)
            f.close()
            bigFile.close()
            cmds = 'eog %s%s'%(output,strBoth(filename))
            os.popen(cmds)
            print('创建成功！')

        def download(filename, outputDir,bigFileName):
            fileN = filename
            output = outputDir
            urlBigFile = bigFileName
            urlBigFileArray = urlBigFile.split("/")
            bFName = urlBigFileArray[-1]
            conn = psycopg2.connect(database="filedb", user="postgres", password="postgres", host="10.10.92.233", port="5432")
            cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
            sql = "select * from file_info WHERE url = \'%s\' AND bigfile_name = \'%s\';"%(filename,bFName)
            cursor.execute(sql)
            answer = cursor.fetchone()
            if answer == None :
                print('不存在该大文件的数据')
            elif answer != None :
                print(answer)
                file_size = answer[2]
                start_position = answer[5]
                DBurl = answer[7]
                print('urlBigFile=', urlBigFile)
                test = os.path.isfile(urlBigFile)
                if test == False:
                    print('请确认该路径底下的大文件%s ' % (urlBigFile))
                    sys.exit()
                downloadOne(fileN, start_position, urlBigFile, DBurl, file_size, output, bFName)
            conn.commit()
            conn.close()

        def lsDir (bName):
            bArray = bName.split('/')
            bigName = bArray[-1]
            conn = psycopg2.connect(database="filedb", user="postgres", password="postgres", host="10.10.92.233", port="5432")
            cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
            sql = 'select url,file_size,start_position from file_info WHERE bigfile_name = \'%s\'' % (bigName)
            cursor.execute(sql)
            rows = cursor.fetchall()
            print(rows)
            conn.commit()
            conn.close()
            if rows == [] :
                print('搜索结果为空,请确认数据库中是否存在该大文件的存储内容')
            for item in rows:
                print("fileSize= '%s', startPosition= '%s', fileName= '%s'" % ( item[1], item[2], item[0]))

        def consoleLog():
            print(
                '''

            请注意，该脚本基于  psycopg2 ,请检查python环境中是否存在 psycopg2 和 psycopg2-binary 两个包 请运行‘pip install -U pip ; pip install psycopg2’ 以安装二进制psycopg2的包,如果无法用./执行，请使用 python fileMergeSline.py <命令> 来执行
            帮助:     必填项《 》  选填项 [ ]
            功能：
            -h --help             [打开帮助文档]
            -t --tar              《合并指令》
            -c --cat              《提取单个文件,并用eog打开》
            -l --ls               《展示postgresql中所有的fileName》

            参数:
            -d --dist             [解压的目标文件夹]
            -s --src              《目标路径》
            -n --name             -t 《带或不带路径的大文件名》
                              -c  《文件名》
            -b --bigFile          《不带路径的大文件名》

            example:

            合并文件

            [sudo] [python3] ./fileMergeSline.py -t 《-s '文件夹路径'》 《-n '带或不带路径的大文件名称'》

            查看文件

            [sudo] [python3] ./fileMergeSline.py -l 《-b '不带路径的大文件名'》


            提取单个并用eog查看

            [sudo] [python3] ./fileMergeSline.py -c 《-n 文件名》 [-d '输出文件夹'] 《-b '不带路径的大文件名'》

                '''
            )
        def main(argv):
            try:  #  这里的 h 就表示该选项无参数，m:表示 m 选项后需要有参数
                opts, args = getopt.getopt(argv, "htcld:s:n:b:", ["help", "tar", "cat", "ls", "dist=", "src=", "name=", "bigFile="])
            except getopt.GetoptError:
                print('        输入错误，请用 --help 或 -h 查询语法')
                sys.exit(2)

            for opt, arg in opts:
                if opt in ("-h", "--help"):
                    consoleLog()
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
                elif opt in ("-c", "--cat"):
                    outputDirectory = None
                    fileName = None
                    bigFileName = None
                    for item in opts:
                        if item[0] in ("-d", "--dist"):
                            outputDirectory = item[1]
                        elif item[0] in ("-n", "--name"):
                            fileName = item[1]
                            print('fileName=', fileName)
                        elif item[0] in ("-b", "--bigFile"):
                            bigFileName = item[1]

                    if outputDirectory == None:
                        outputDirectory = './'

                    if fileName == None:
                        print('缺少参数 -n')
                        sys.exit()
                    if bigFileName == None:
                        print('缺少参数 -b')
                        sys.exit()
                    print('outputDirectory=',outputDirectory,'fileName=',fileName,'bigFileName=',bigFileName)
                    download(fileName, outputDirectory, bigFileName)
                elif opt in ("-l", "--ls"):
                    bigFileName = None
                    for item in opts:
                        if item[0] in ("-b", "--bigFile"):
                            bigFileName = item[1]
                    if bigFileName == None:
                        print('缺少参数 -b')
                        sys.exit()
                    lsDir(bigFileName)

        if __name__ == "__main__":
            main(sys.argv[1:])
      </pre>
      <!--eslint-enable-->
    </div>
</template>

<script>
export default {
  name: 'script',
  data () {
    return {
      msg: 'this is script'
    }
  }
}
</script>

<style scoped>

</style>
