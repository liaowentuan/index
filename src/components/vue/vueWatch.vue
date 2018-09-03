<template>
    <div class="page">
      <!--eslint-disable-->
      <h3>监听watch</h3>
      <pre>
        watch:{
            watch1 (newVal,oldVal) { // 浅监听
                console.log(newVal,oldVal)
            },
            watch2: 'a'，// 值可以为methods的方法名
            watch3: { // 深度监听
                //注意：当观察的数据为对象或数组时，newVal和oldVal是相等的，因为引用类型指向地址
                handler (newVal,oldVal) {
                    conosle.log(newVal,oldVal)
                },
                immediate: true, // 立即执行
                deep:true // 开启深度监听
            }
        },
        methods:{
            a (newVal,oldVal) {
                conosle.log(newVal,oldVal)
            }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'wacth',
  data () {
    return {
      msg: 'this is mixin'
    }
  }
}
</script>

<style scoped>

</style>
