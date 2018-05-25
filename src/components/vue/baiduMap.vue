<template>
    <div class="page">
      <h3>使用百度在线地图2.0 (异步加载)</h3>
      <pre>
        Vue.prototype.createMap = (callback) => { // 创建地图需要执行回调
          if (typeof (callback) !== 'function') { this.$message('请传入一个回调函数') }
          if (!window.BMap) {
            let MP = _ => {
              return new Promise(function (resolve, reject) {
                window.onload = function () {
                  resolve(BMap) // eslint-disable-line
                }
                let script = document.createElement('script')
                script.type = 'text/javascript'
                script.src = `http://api.map.baidu.com/api?v=2.0&ak=${公司的ak}&callback=init`
                script.onerror = reject
                document.head.appendChild(script)
              })
            }
            MP().then(BMap => {
              window.BMap = BMap
            })
          }
          if (!window.BMap) {
            setTimeout(_ => {
              callback() // 地图API
            }, 1000)
          } else {
            callback() // 地图API
          }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'baidu-map',
  data () {
    return {
      msg: 'this is baidu-map'
    }
  }
}
</script>

<style scoped>

</style>
