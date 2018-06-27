<template>
  <div class="page">
    <h3>第四题</h3>
    <pre>
      function foo1(){
        return {  >>> object
          bar: "hello"
        }
      }

      function foo2(){
        return     >>> undefined
          {
              bar: "hello"
          }
      }

      return 代码行上没有其他任何代码，分号会立即自动插入到返回语句之后
      </pre>
  </div>
</template>
