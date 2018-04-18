<template>
    <div>
      <h3>元组</h3>
      <pre>
        不可改的，类似list的一个东西
        tup = (1,2,3,4)
        print(tup[2])
        print(tup.count(1))
      </pre>
    </div>
</template>

<script>
export default {
  name: 'tuple',
  data () {
    return {
      msg: 'this is tuple'
    }
  }
}
</script>

<style scoped>

</style>
