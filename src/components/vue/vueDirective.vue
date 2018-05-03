<template>
    <div class="page">
      <h3>自定义指令</h3>
      <pre>
         ﹂src
          ﹂common (创建)
            ﹂js (创建)
              ﹂util.js (创建)

        export const drag = {
          inserted (el) {
            // console.log(el) // 当被绑定的元素插入到 DOM 中时……
          },
          bind (el, binding, node) {
            el.onmousedown = e => {
              // console.log(binding)
              if (typeof (node.data.attrs.start) === 'function') {
                node.data.attrs.start()
              }
              let disX = e.clientX - el.offsetLeft
              let disY = e.clientY - el.offsetTop
              document.onmousemove = function (e) {
                let l = e.clientX - disX
                let t = e.clientY - disY
                el.style.left = l + 'px'
                el.style.top = t + 'px'
                // binding.value({x: e.pageX, y: e.pageY})
              }
              document.onmouseup = e => {
                document.onmousemove = null
                document.onmouseup = null
              }
            }
          }
        }

        ﹂main.js

        import {drag} from './common/js/util'
        Vue.directive('drag', drag)

        vuecompoment

        div class="card-header" v-drag style="position: absolute" :start="log"
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
