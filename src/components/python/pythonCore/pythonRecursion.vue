<template>
    <div>
      <h3>递归函数</h3>
      <pre>
        通过前面的学习知道一个函数可以调用其他函数。

        如果一个函数在内部不调用其它的函数，而是自己本身的话，这个函数就是递归函数。
      </pre>
      <h3>使用场景</h3>
      <pre>
        1! = 1
        2! = 2 × 1 = 2 × 1!
        3! = 3 × 2 × 1 = 3 × 2!
        4! = 4 × 3 × 2 × 1 = 4 × 3!
        ...
        n! = n × (n-1)!

        def factorial(num):
          if num > 1:
            result = num * factorial(num - 1)
          else:
            result = 1
          return result
      </pre>
    </div>
</template>

<script>
export default {
  name: 'python-recursion',
  data () {
    return {
      msg: 'this is python-recursion'
    }
  }
}
</script>

<style scoped>

</style>
