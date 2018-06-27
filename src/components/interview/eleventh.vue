<template>
  <div class="page">
    <h3>第十一题</h3>
    <pre>
      function test() {
         console.log(a);
         console.log(foo());

         var a = 1;
         function foo() {
            return 2;
         }
      }

      test();
      >>> undefined
      >>> 2
      导致这个结果的原因是：变量和函数都被提升到了函数体的顶部.
    </pre>
  </div>
</template>
