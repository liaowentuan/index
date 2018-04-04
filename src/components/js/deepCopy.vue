<template>
    <div class="page">
      <h3>对象的深度拷贝(1)</h3>
      <pre>
        var obj = {a:{b:10}};
        function deepCopy(obj){
          if(typeof obj != 'object'){
              return obj;
          }
          var newobj = {};
          for ( var attr in obj) {
              newobj[attr] = deepCopy(obj[attr]);
          }
          return newobj;
        }
        var obj2 = deepCopy(obj);
        obj2.a.b = 20;
        alert(obj.a.b); //10
      </pre>
      <h3>深拷贝(2)</h3>
      <pre>
        function clone(obj) {
          let copy;
          // Handle the 3 simple types, and null or undefined
          if (null == obj || "object" != typeof obj) return obj;
          // Handle Date
          if (obj instanceof Date) {
              copy = new Date();
              copy.setTime(obj.getTime());
              return copy;
          }
          // Handle Array
          if (obj instanceof Array) {
              copy = [];
              for (var i = 0, len = obj.length; len > i; i++) {
                  copy[i] = clone(obj[i]);
              }
              return copy;
          }
          // Handle Object
          if (obj instanceof Object) {
              copy = {};
              for (var attr in obj) {
                  if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
              }
              return copy;
          }
          throw new Error("Unable to copy obj! Its type isn't supported.");
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'deep-copy',
  data () {
    return {
      msg: 'this is deep-copy'
    }
  }
}
</script>

<style scoped>

</style>
