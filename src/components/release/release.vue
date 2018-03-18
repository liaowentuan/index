<template>
  <div class="release">
    <div class="menu">
      <el-radio-group v-model="item" style="margin-bottom: 30px;" @change="tabClick(item)">
        <el-radio-button label="first">请假管理</el-radio-button>
        <el-radio-button label="second">放行管理</el-radio-button>
        <el-radio-button label="third">请假管理</el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'release',
  data () {
    return {
      msg: 'this is release',
      item: 'first',
      name: ''
    }
  },
  methods: {
    tabClick (item) {
      this.$router.replace({path: `/home/release/${item}`})
    }
  }
}
</script>

<style scoped lang="less">
  .release{
    .menu{
      padding:10px 20px;
    }
    .el-radio-button:focus{
      box-shadow: none !important;
    }
  }
</style>
