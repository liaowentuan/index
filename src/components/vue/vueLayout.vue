<template>
  <div class="page">
    <h3>懒加载</h3>
    <pre>
      const vueDocs = (resolve) => {
        import('@/components/vue/vueDocs').then((module) => {
          resolve(module)
        })
      }
    </pre>
    <h3>or</h3>
    <pre>
      const vueInit = () => import('@/components/vue/vueInit')
    </pre>
  </div>
</template>

<script>
export default {
  name: 'vue-layout'
}
</script>

<style scoped>

</style>
