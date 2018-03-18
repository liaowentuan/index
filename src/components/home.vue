<template>
  <div class="login">
    <nav>
        <ul>
          <li class="logo"><img src="" alt="没有logo"></li>
          <li><router-link to="/home/realTime"><i class="el-icon-view"></i><br><span>实时预览</span></router-link></li>
          <li><router-link to="/home/traffic"><i class="el-icon-sort"></i><br><span>通行统计</span></router-link></li>
          <li><router-link to="/home/statistics"><i class="el-icon-date"></i><br><span>统计数据</span></router-link></li>
          <li><router-link to="/home/personnel"><i class="el-icon-printer"></i><br><span>人员管理</span></router-link></li>
          <li><router-link to="/home/auditing"><i class="el-icon-edit-outline"></i><br><span>审核管理</span></router-link></li>
          <li><router-link to="/home/release"><i class="el-icon-edit"></i><br><span>放行管理</span></router-link></li>
          <li><router-link to="/home/sysModule"><i class="el-icon-setting"></i><br><span>系统管理</span></router-link></li>
        </ul>
    </nav>
    <main>
      <el-row class="title">
        <el-col :span="4" :offset="20">
          <el-row>
            <el-col :span="8"><el-button icon="el-icon-circle-check-outline"></el-button></el-col>
            <el-col :span="8"><el-button icon="el-icon-phone-outline"></el-button></el-col>
            <el-col :span="8"><el-button icon="el-icon-edit-outline"></el-button></el-col>
          </el-row>
        </el-col>
      </el-row>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.login{
  nav{
    position: fixed;
    height: 100%;
    width: 200px;
    box-sizing: border-box;
    background: #616C88;
    .router-link-active{
      background: #424A60;
      width: 100%;
    }
    a{
      text-decoration: none;
      color:#fff;
      display: block;
      text-align: center;
      margin: 15px 0;
      padding: 10px 0;
      i{
        font-size: 40px;
      }
    }
    .logo{
      height: 70px;
    }
  }
  main{
    margin-left:200px;
  }
  .title{
    padding: 15px 0;
    border-bottom: 5px solid #f2f2f2;
  }
}
</style>
