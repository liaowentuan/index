<template>
    <div>
      <h3>List 列表</h3>
      <h3>查</h3>
      <!--eslint-disable-->
      <pre>
        namesList = ['xiaoWang','xiaoZhang','xiaoHua']
        print(namesList[2])  等同于  print(nameList[-1])
        >>> 'xiaoHua'

        index, count
        index和count与字符串中的用法相同

        >>> a = ['a', 'b', 'c', 'a', 'b']
        >>> a.index('a', 1, 3) # 注意是左闭右开区间
        Traceback (most recent call last):
          File "< stdin >", line 1, in < module >
        ValueError: 'a' is not in list
        >>> a.index('a', 1, 4)
        3
        >>> a.count('b')
        2
        >>> a.count('d')
        0

        in（存在）,如果存在那么结果为true，否则为false
        not in（不存在），如果不存在那么结果为true，否则false

        #待查找的列表
        nameList = ['xiaoWang','xiaoZhang','xiaoHua']

        #获取用户要查找的名字
        findName = input('请输入要查找的姓名:')

        #查找是否存在
        if findName in nameList:
          print('在字典中找到了相同的名字')
        else:
          print('没有找到')

      </pre>
      <h3>循环列表</h3>
      <pre>
        demo:
            namesList = ['xiaoWang','xiaoZhang','xiaoHua']
            length = len(namesList)
            i = 0
            while length < i:
                print(namesList[i])
                i+=1
        结果:
            xiaoWang
            xiaoZhang
            xiaoHua
      </pre>
      <h3>增</h3>
      <pre>
        append
          通过append可以向列表添加元素
          >>> a = [1, 2]
          >>> b = [3, 4]
          >>> a.append(b)
          >>> a
          [1, 2, [3, 4]]
        extend
          通过extend可以将另一个集合中的元素逐一添加到列表中
          >>> a.extend(b)
          >>> a
          [1, 2, [3, 4], 3, 4]
        insert
           insert(index, object) 在指定位置index前插入元素object
           >>> a = [0, 1, 2]
           >>> a.insert(1, 3)
           >>> a
           [0, 3, 1, 2]


      </pre>
      <h3>改</h3>
      <pre>
        A = ['xiaoWang','xiaoZhang','xiaoHua']
        A[1] = 'hello'
        print(A)
        >>>['xiaoWang','hello','xiaoHua']
      </pre>
      <h3>删</h3>
      <pre>
        列表元素的常用删除方法有：
          del：根据下标进行删除
          pop：删除最后一个元素
          remove：根据元素的值进行删除
            movieName = ['加勒比海盗','骇客帝国','第一滴血','指环王','霍比特人','速度与激情']
            del movieName[2]
            movieName = ['加勒比海盗','骇客帝国','指环王','霍比特人','速度与激情']
            movieName.pop()
            movieName = ['加勒比海盗','骇客帝国','指环王','霍比特人']
            movieName.remove('指环王')
            movieName = ['加勒比海盗','骇客帝国','霍比特人']
      </pre>
      <h3>排序 翻转</h3>
      <pre>
        sort方法是将list按特定顺序重新排列，默认为由小到大，参数reverse=True可改为倒序，由大到小。
        reverse方法是将list逆置。
        >>> a = [1, 4, 2, 3]
        >>> a
        [1, 4, 2, 3]
        >>> a.reverse()
        >>> a
        [3, 2, 4, 1]
        >>> a.sort()
        >>> a
        [1, 2, 3, 4]
        >>> a.sort(reverse=True)
        >>> a
        [4, 3, 2, 1]
      </pre>
      <!--eslint-enable-->
    </div>
</template>

<script>
export default {
  name: 'python-list',
  data () {
    return {
      msg: 'this is python-list'
    }
  }
}
</script>

<style scoped>

</style>
