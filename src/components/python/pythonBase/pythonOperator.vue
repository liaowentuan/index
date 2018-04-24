<template>
  <div>
    <h3>运算符</h3>
    <pre>
      运算符       Python 表达式            结果                    描述                  支持的数据类型
        +         [1, 2] + [3, 4]       [1, 2, 3, 4]                合并               字符串、列表、元组
        *         'Hi!' * 4        ['Hi!', 'Hi!', 'Hi!', 'Hi!']     复制               字符串、列表、元组
        in         3 in (1, 2, 3)           True                元素是否存在        字符串、列表、元组、字典
      not in      4 not in (1, 2, 3)        True                元素是否不存在      字符串、列表、元组、字典
    </pre>
    <h3>id地址</h3>
    <pre>
      >>> a = 1
      >>> b = a
      >>> id(a)
      13033816
      >>> id(b)   # 注意两个变量的id值相同
      13033816
      >>> a = 2
      >>> id(a)   # 注意a的id值已经变了
      13033792
      >>> id(b)   # b的id值依旧
      13033816
    </pre>
  </div>
</template>

<script>
export default {
  name: 'pythonOperator'
}
</script>

<style scoped>

</style>
