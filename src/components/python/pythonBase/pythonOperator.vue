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
  </div>
</template>

<script>
export default {
  name: 'pythonOperator'
}
</script>

<style scoped>

</style>
