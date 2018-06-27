<template>
  <div class="page">
    <h3>第二题</h3>
    <pre>
        (function(){
            var a = b = 3
        })()

        console.log(typeof a == 'undefined') >>> true
        console.log(typeof b == 'undefined') >>> false

        var a = b = 3
        >>>
        b = 3 (隐形全局变量)
        var a = b
      </pre>
  </div>
</template>
