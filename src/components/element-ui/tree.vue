<template>
    <div class="page">
      <h3>自定义树形控件</h3>
      <pre>
        <!--eslint-disable-->
        < el-row v-show="roleId != ''">
          < el-col :span="24">
            < el-form-item label="">
              < !-- :props="treeProps" -->
              < el-tree
                ref="youTreeList"
                :data="totleTree"
                :indent="30"
                show-checkbox
                node-key="id"
                :default-checked-keys="checkoutList"
                :expand-on-click-node="false"
                >
                < !-- 如果要自定义样式，就不要使用props了 -->
                < div class="custom-tree-node" slot-scope="{node, data}">
                  < div @click="log(node)">
                    < span>\{\{ node.data.name }}< /span>
                  < /div>
                < /div>
              < /el-tree>
            < /el-form-item>
          < /el-col>
        < /el-row>
        < el-button @click="allOpen">
            展开
        < /el-button>
        < el-button @click="allClose">
            收起
        < /el-button>
        data () {
          return {
            treeProps: {
                children: 'children',
                label: 'name',
                key: 'id'
            },
          }
        }
        methods: {
          allOpen() {
            for(var i=0; this.$refs.youTreeList.store._getAllNodes().length > i;i++){
                this.$refs.youTreeList.store._getAllNodes()[i].expanded= true;
            }
          },
          allClose() {
              for(var i=0;this.$refs.youTreeList.store._getAllNodes().length > i;i++){
                  this.$refs.youTreeList.store._getAllNodes()[i].expanded= false;
              }
          },
        }
      </pre>
      <h3>递归设置disabled状态</h3>
      <pre>
        changeCheckStatus(status, treeList) {
          this.checkAllstatus = status // 缓存当前状态
          let changeCheckStatus = tree => {
            tree.forEach(item => {
              if (item.children) {
                changeCheckStatus(item.children)
              }
              this.$set(item, 'disabled', status)
            })
          }
          changeCheckStatus(treeList)
        }
      </pre>
      <h3>获取选中的checkbox.id</h3>
      <pre>
        this.selectKeysArr = []
        for (let i in this.$refs.youTreeList.store.nodesMap) {
          if (this.$refs.youTreeList.store.nodesMap[i].checked == true || this.$refs.youTreeList.store.nodesMap[i].indeterminate== true) {
            this.selectKeysArr.push(i)
          }
        }
      </pre>
    </div>
</template>

<script>
export default {
  name: 'ele-tree'
}
</script>

<style scoped>

</style>
