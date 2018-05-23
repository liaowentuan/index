<template>
  <div class="login">
    <el-row>
      <el-col :span="4" :offset="10"><div class="grid-content"><el-input placeholder="请输入内容" v-model="user" clearable> </el-input></div></el-col>
    </el-row>
    <el-row>&nbsp;</el-row>
    <el-row>
      <el-col :span="4" :offset="10"><div class="grid-content"><el-input placeholder="请输入内容" v-model="upwd" type="password" clearable @keyup.enter.native ="login"></el-input></div></el-col>
    </el-row>
    <el-row>&nbsp;</el-row>
    <el-row>&nbsp;</el-row>
    <el-row><el-col :span="4" :offset="10"><div class="grid-content"><el-button class="el-button--primary" @click="login">登录</el-button></div></el-col></el-row>
    <el-row><el-col :span="4" :offset="10"><div class="grid-content"><el-button type="text">忘记密码</el-button></div></el-col></el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      upwd: ''
    }
  },
  methods: {
    login () {
      this.$http({
        method: 'POST',
        url: '/controller/login/user/admin',
        data: {
          user_name: this.user,
          u_passwd: this.upwd
        }
      }).then(function (res) {
        if (res.data.status === true) {
          window.sessionStorage.setItem('user', JSON.stringify(res.data))
          window.location.href = '#/home'
        }
      }).catch(res => {
        if (this.user === 'web') {
          window.sessionStorage.setItem('ROLE', 'web')
          this.$router.push({path: '/home/vue'})
        } else if (this.user === 'python') {
          window.sessionStorage.setItem('ROLE', 'python')
          this.$router.push({path: '/home/python'})
        } else if (this.user === 'superAdmin') {
          window.sessionStorage.setItem('ROLE', 'superAdmin')
          this.$router.push({path: '/home/vue'})
        } else {
          this.$notify({
            title: '提示',
            message: '您的输入有误, 请用 "web", "python", "superAdmin" 三个账号, 密码随意填写',
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  margin-top: 400px;
  .el-row{
    text-align: center;
    .el-button{
      width: 100%;
    }
  }
}
</style>
