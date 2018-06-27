<template>
  <div class="page">
    <h3>第九题</h3>
    <pre>
      var a={}, b={key:'b'}, c={key:'c'};

      a[b]=123;
      a[c]=456;

      console.log(a[b]);
      >>> 456

      因为： console.log(a)
      >>> {[object Object]: 456}
    </pre>
  </div>
</template>
