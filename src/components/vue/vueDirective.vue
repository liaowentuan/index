<template>
    <div class="page">
      <h3>自定义指令</h3>
      <pre>
         ﹂src
          ﹂common (创建)
            ﹂js (创建)
              ﹂util.js (创建)

        export const drag = {
          bind: function (el, binding) {
            console.log(binding)
            let oDiv = el
            oDiv.onmousedown = function (e) {
              let disX = e.clientX - oDiv.offsetLeft
              let disY = e.clientY - oDiv.offsetTop
              document.onmousemove = function (e) {
                let l = e.clientX - disX
                let t = e.clientY - disY
                oDiv.style.left = l + 'px'
                oDiv.style.top = t + 'px'
                // binding.value({x: e.pageX, y: e.pageY})
              }
              document.onmouseup = function (e) {
                document.onmousemove = null
                document.onmouseup = null
              }
            }
          }
        }

        ﹂main.js

        import {drag} from './common/js/util'
        Vue.directive('drag', drag)

      </pre>
    </div>
</template>

<script>
export default {
  name: 'vue-directive',
  data () {
    return {
      msg: 'this is vue-directive'
    }
  }
}
</script>

<style scoped>

</style>
