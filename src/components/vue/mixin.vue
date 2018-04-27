<template>
    <div class="page">
      <!--eslint-disable-->
      <h3>通用数据或方法</h3>
      <pre>
        ﹂src
          ﹂common (创建)
            ﹂mixin.js

        export const dateFrom = {
          data () {
            return {
              pickerOptions2: {
                shortcuts: [{
                  text: '最近一周',
                  onClick (picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                    picker.$emit('pick', [start, end])
                  }
                }, {
                  text: '最近一个月',
                  onClick (picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                    picker.$emit('pick', [start, end])
                  }
                }, {
                  text: '最近三个月',
                  onClick (picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                    picker.$emit('pick', [start, end])
                  }
                }]
              }
            }
          }
        }

        组件中引用

        < script >
        import {dateFrom} from 'common/js/mixin'
        export default {
          mixins: [dateFrom],
          name: 'new',
          data () {
      </pre>
    </div>
</template>

<script>
export default {
  name: 'mixin',
  data () {
    return {
      msg: 'this is mixin'
    }
  }
}
</script>

<style scoped>

</style>
