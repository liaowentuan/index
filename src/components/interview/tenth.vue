<template>
  <div class="page">
    <h3>第十题 this 指向问题</h3>
    <pre>
      个人感觉只有三种结果（个人感觉）
      1.this 指向上一层调用对象
      （1）.
        function func(){
          console.log(this)
        }
        func()  // this--->window  因为 window.func()
      （2）.
        var o = {
          a:10,
          b:{
            // a:12,
            fn:function(){
                console.log(this.a)  // 上一层如果有a：12 那么就输出12 可惜没有
            }
          }
        }
        o.b.fn(); // undefined
        （3）.
        function func(){
          console.log(this)  // window
        }

        setTimeout(func,1000) // this--->window 定时器的函数是指向window的
        setTimeout(func(a, b), 1000, a, b) // 定时器传参
      2. new 指向新对象
        var obj = new func() //this--->new出的新obj
      3. 函数作为数组的一个元素，通过数组下标调用的：this指向这个数组
        var arr = [func,1,2,3]
        arr[0]()  // this--->arr
    </pre>
  </div>
</template>
