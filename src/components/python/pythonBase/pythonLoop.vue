<template>
    <div class="python-loop">
        <h3>for</h3>
        <pre>
          name = 'dongGe'

          for x in name:
            print(x)

          d
          o
          n
          g
          G
          e
        </pre>
        <h3>enumerate</h3>
        <pre>
          arr = [1,2,3,4]
          for i in enumerate(arr):   #for index,i in enumerate(arr):
            print(i)

          (0, 1)
          (1, 2)
          (2, 3)
          (3, 4)
        </pre>
        <h3>while</h3>
        <pre>
          i = 0
          while 5>i :
            print(i)
            i+=1
          0
          1
          2
          3
          4
        </pre>
        <h3>break   continue</h3>
        <pre>
          break的作用：用来结束整个循环
          continue的作用：用来结束本次循环，紧接着执行下一次的循环
          break/continue只能用在循环中，除此以外不能单独使用
          break/continue在嵌套循环中，只对最近的一层循环起作用
        </pre>
    </div>
</template>

<script>
export default {
  name: 'python-loop',
  data () {
    return {
      msg: 'python-loop'
    }
  }
}
</script>

<style scoped>

</style>
