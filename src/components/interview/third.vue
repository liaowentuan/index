<template>
  <div class="page">
    <h3>第三题</h3>
    <pre>
     var myObject = {
        foo: 'bar',
        func: function() {
            var self = this
            console.log(this.foo)
            console.log(self.foo)
            (function() {
                console.log(this.foo)
                console.log(self.foo)
            }())
        }
      }
      myObject.func()

      >>> bar
      >>> bar
      >>> undefined
      >>> bar

      在外部函数中，  this 和 self 两者都指向了 myObject，因此两者都可以正确地引用和访问 foo。

      在内部函数中, this不再指向myObject。其结果是，this.foo 没有在内部函数中被定义，相反，指向到本地的变量 self 保持在范围内，并且可以访问。 （在ECMA 5之前，在内部函数中的this 将指向全局的 window 对象；反之，因为作为ECMA 5，内部函数中的功能this 是未定义的。）
    </pre>
  </div>
</template>
