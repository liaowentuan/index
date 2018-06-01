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
      <h3>BUG  Polyline</h3>
      <pre>
        <a href="https://blog.csdn.net/dyllove98/article/details/9124353" target="_Blank">https://blog.csdn.net/dyllove98/article/details/9124353</a>
        1.直线：（简单理解为从开始点到结束点）
          1.1 同经度时，从低纬度到高纬度。
          1.2 同纬度时，从小经度度到大经度。
        2.折线：（不分经纬度大小高低，只是按坐标序列先后依次将各个点连接）

        折线画法
        var point1= new BMap.Point( 113.33765, 23.150435 )
        var point2= new BMap.Point( 113.34765, 23.160435 )
        var point3= new BMap.Point( 113.35765, 23.170435 )

        var polyline =  new BMap.Polyline([
          point1,
          point2,
          point3
        ], {strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5})
        map.addOverlay(polyline);
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
