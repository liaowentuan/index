<template>
    <div class="page">
      <h3>
        换肤
      </h3>
      <pre>
        使用less编译器

        @h1Font: #333; // 标题
        @h4Font: #666; // 副标题
        @pFont:  #999; // 辅助文字

        定义less文件:  colors.less

        .style1{
          .change(#E1E2E8 , #76abd3 ,#4785b8, all 0.5s linear); /* 宝蓝 [0,1,6] 蓝色 */
        }
        .style2{
          .change(#E1E2E8,  #b88bcb,#9f35ff, all 0.5s linear); /* 紫色 */
        }
        .style3{
          .change(#E1E2E8, #13cb89,#205527, all 0.5s linear); /* 宝石绿 */
        }
        .style0{
          .change(#999, #333,#000, all 0.5s linear); /* 程序黑 */
        }

        在组件内调用

        @import "../../common/css/colors.less";
        .change(@background, @shallow, @deep, @transition) {
          .lookup {
            background: @background;
            transition: @transition;
          }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'skin'
}
</script>

<style scoped>

</style>
