<template>
    <div class="page">
      <h3>强制推送</h3>
      <pre>
        git push -u origin master -f
      </pre>
    </div>
</template>

<script>
export default {
  name: 'force-push',
  data () {
    return {
      msg: 'this is force-push'
    }
  }
}
</script>

<style scoped>

</style>
