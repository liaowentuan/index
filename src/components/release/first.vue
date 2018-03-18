<template>
  <div>
    <el-row class="search">
      <el-col :span="5">
        <el-input v-model="name"></el-input>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-button class="el-button--primary" @click="increment">立即查询</el-button>
        <el-button class="el-button--primary" @click="decrement">--</el-button>
        <p>{{count}}</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
/* eslint-disable */
/*
                             \\\|/// 
                           \\  - -  // 
                            (  @ @  ) 
 ┏━━━━━━━━━━━━━━━━━━━━━━━━oOOo-(_)-oOOo━━━━━━━━━━━━━━━━━━━━━┓
                十年编程两茫茫,工期短,需求长                  
 ┃                                                          ┃
                    千行代码,Bug何处藏                       
 ┃                                                          ┃
                纵使上线又如何,新版本,继续忙                  
 ┃                                                          ┃
                黑白颠倒没商量,睡地铺,吃食堂                  
 ┃                                                          ┃
                     夜半梦醒,无人在身旁                     
 ┃                                                          ┃
                 最怕灯火阑珊时,手机响,心里慌     
 ┃                                Oooo                      ┃
 ┗━━━━━━━━━━━━━━━━━━━━━━━━━ oooO━━(   )━━━━━━━━━━━━━━━━━━━━━┛
                           (   )   ) / 
                            \ (   (_/ 
                             \_)
*/
/* eslint-enable */
export default {
  name: 'first',
  data () {
    return {
      msg: 'this is first',
      name: ''
    }
  },
  methods: {
    cons (item) {
      console.log('这是底下的方法', item)
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  computed: {
    count () {
      this.cons(this.$store.state.count)
      return this.$store.state.count
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log('mounted')
    })
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated: function () {
    this.$nextTick(function () {
      console.log('updated')
    })
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    this.$store.commit('setcrement')
  }
}
</script>

<style scoped>
</style>
