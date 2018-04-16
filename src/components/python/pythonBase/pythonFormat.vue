<template>
    <div>
      <h3>格式化字符串</h3>
      <pre>
        "我的姓名是%s,年龄是%d"%(name,age)
      </pre>
      <table>
        <tr>
          <td>格式符号</td>
          <td>转换</td>
        </tr>
        <tr>
          <td>%c</td>
          <td>字符</td>
        </tr>
        <tr>
          <td>%s</td>
          <td>通过str() 字符串转换来格式化</td>
        </tr>
        <tr>
          <td>%i</td>
          <td>有符号十进制整数</td>
        </tr>
        <tr>
          <td>%d</td>
          <td>有符号十进制整数</td>
        </tr>
        <tr>
          <td>%u</td>
          <td>无符号十进制整数</td>
        </tr>
        <tr>
          <td>%o</td>
          <td>八进制整数</td>
        </tr>
        <tr>
          <td>%x</td>
          <td>十六进制整数（小写字母）</td>
        </tr>
        <tr>
          <td>%X</td>
          <td>十六进制整数（大写字母）</td>
        </tr>
        <tr>
          <td>%e</td>
          <td>索引符号（小写'e'）</td>
        </tr>
        <tr>
          <td>%E</td>
          <td>索引符号（大写“E”）</td>
        </tr>
        <tr>
          <td>%f</td>
          <td>浮点实数</td>
        </tr>
        <tr>
          <td>%g</td>
          <td>％f和％e 的简写</td>
        </tr>
        <tr>
          <td>%G</td>
          <td>％f和％E的简写</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'python-format'
}
</script>

<style scoped>

</style>
