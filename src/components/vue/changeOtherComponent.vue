<template>
    <div class="page">
      <h3>不影响原组件的情况下为别人的组件添加新功能,使用自定义指令干涉</h3>
      <h3>具体请参照自定义指令</h3>
      <pre>
        只需在 el-dialog 组件上增加 v-dialog-drag 就好了
        main.js
        Vue.directive('dialog-drag', dialogDrag)
        export const dialogDrag = { // 拖拽的方法
          inserted (el) {
            // el.style.cssText = 'width:auto;position:fixed;top:0;left:0;right:0;bottom:0;'
            el.style.width = 'auto'
            el.style.position = 'fixed'
            el.style.top = 0
            el.style.bottom = 0
            el.style.left = 0
            el.style.right = 0
          },
          bind (el, binding, node) {
            el.onmousedown = e => {
              el.children[0].style.left = el.children[0].offsetLeft + 'px'
              el.children[0].style.top = el.children[0].offsetTop + 'px'
              el.children[0].style.position = 'absolute'
              el.children[0].style.margin = '0'
              if (typeof (node.data.attrs.start) === 'function') {
                node.data.attrs.start()
              }
              let disX = e.clientX - el.children[0].offsetLeft
              let disY = e.clientY - el.children[0].offsetTop
              let screenW = document.documentElement.clientWidth
              let screenH = document.documentElement.clientHeight
              let maxRight = screenW - el.children[0].offsetWidth
              let maxTop = screenH - el.children[0].offsetHeight
              document.onmousemove = function (e) {
                let l = e.clientX - disX
                let t = e.clientY - disY
                l = 0 > l ? 0 : l
                l = l > maxRight ? maxRight : l
                t = 0 > t ? 0 : t
                t = t > maxTop ? maxTop : t
                el.children[0].style.left = l + 'px'
                el.children[0].style.top = t + 'px'
                // binding.value({x: e.pageX, y: e.pageY})
              }
              document.onmouseup = e => {
                document.onmousemove = null
                document.onmouseup = null
              }
            }
          }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'change-other-component',
  data () {
    return {
      msg: 'this is change-other-component'
    }
  }
}
</script>

<style scoped>

</style>
