<template>
    <div>
      <h3>遍历字符串</h3>
      <pre>
        >>> a_str = "hello itcast"
        >>> for char in a_str:
        ...     print(char,end=' ')
        ...
        h e l l o   i t c a s t
      </pre>
      <h3>遍历list列表</h3>
      <pre>
        >>> a_list = [1, 2, 3, 4, 5]
        >>> for num in a_list:
        ...     print(num,end=' ')
        ...
        1 2 3 4 5
      </pre>
      <h3>元祖tuple遍历</h3>
      <pre>
        >>> a_turple = (1, 2, 3, 4, 5)
        >>> for num in a_turple:
        ...     print(num,end=" ")
        1 2 3 4 5
      </pre>
      <h3>遍历对象dict</h3>
      <pre>
        dict = {"0":2,"1":2}
        keys

        for key in dict.keys()
          print(key)
        value

        for value in dict.values()
          print(value)

        item

        for item in dict.items()
          print(item)
        >>>
        (0,2)
        (1,2)

        key,value

        for key,value in dict.items()
          print(key,value)

      </pre>
      <h3>enumerate()</h3>
      <pre>
        >>> chars = ['a', 'b', 'c', 'd']
        >>> for i, chr in enumerate(chars):
        ...     print i, chr
        ...
        0 a
        1 b
        2 c
        3 d
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-ergodic',
  data () {
    return {
      msg: 'this is python-ergodic'
    }
  }
}
</script>

<style scoped>

</style>
