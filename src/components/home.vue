<template>
  <div>
    <aside>

    </aside>
    <div class="shadow">

    </div>
    <nav>
      <ul>
        <li class="treeLi">
          <router-link to="/home/realTime"><i class="el-icon-view"></i><span>实时预览</span></router-link>
        </li>
        <li class="treeLi">
          <router-link to="/home/traffic"><i class="el-icon-sort"></i><span>通行统计</span></router-link>
        </li>
        <li class="treeLi" @click="treeOne =!treeOne">
          <router-link to="/home/statistics">
            <i class="el-icon-date"></i><span>统计数据</span>
          </router-link>
          <div>
            <ul>
              <li class="branch"><router-link to="/home/statistics/detail"><span>进出明细</span></router-link></li>
              <li class="branch"><router-link to="/home/statistics/abnormity"><span>异常明细</span></router-link></li>
              <li class="branch"><router-link to="/home/statistics/visitor"><span>到访统计</span></router-link></li>
              <li class="branch"><router-link to="/home/statistics/visitors"><span>人流量统计</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi"><router-link to="/home/personnel"><i class="el-icon-printer"></i><span>人员管理</span></router-link></li>
        <li class="treeLi">
          <router-link to="/home/auditing">
            <i class="el-icon-edit-outline"></i><span>审核管理</span>
          </router-link>
          <div>
            <ul>
              <li class="branch"><router-link to="/home/auditing/waiting"><span>待我审核</span></router-link></li>
              <li class="branch"><router-link to="/home/auditing/examined"><span>我已审核</span></router-link></li>
              <li class="branch"><router-link to="/home/auditing/launched"><span>正在审核</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/release">
            <i class="el-icon-edit"></i><span>放行管理</span>
          </router-link>
          <div>
            <ul>
              <li class="branch"><router-link to="/home/release/leave"><span>请假管理</span></router-link></li>
              <li class="branch"><router-link to="/home/release/accomodate"><span>留宿管理</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/sysModule">
            <i class="el-icon-setting"></i><span>系统管理</span>
          </router-link>
          <div>
            <ul>
              <li class="branch"><router-link to="/home/sysModule/user"><span>用户管理</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/equipment"><span>设备管理</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/discern"><span>识别参数</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/log"><span>日志管理</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/storager"><span>存储管理</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/FTP"><span>FTP参数设置</span></router-link></li>
              <li class="branch"><router-link to="/home/sysModule/parameter"><span>页面参数设置</span></router-link></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      treeOne: false
    }
  }
}
</script>

<style scoped lang="less">
  main{
    margin: 85px 0 0 260px;
  }
aside{
  display: block;
  position: fixed;
  height: 85px;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 10;
}
.shadow{
  top: 0;
  width: 100%;
  height: 85px;
  position: fixed;
  box-shadow: 2px 2px 3px 1px #ddd;
  z-index: -5;
}
nav{
  top: 85px;
  bottom: 0;
  position: fixed;
  z-index: 5;
  width: 260px;
  background: #2B333E;
  overflow: hidden;
  ul{
    display: block;
    background: #2B333E;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .treeLi{
      position: relative;
      z-index: 3;
      a{
        display: block;
        height: 60px;
        color: #AEB7C2;
        transition: all 0.3s ease-in-out;
        line-height: 60px;
        margin-left:30px;
        padding-left: 10px;
        border: 0;
        border-left: 5px solid transparent;
        i{
          font-size: 30px;
          margin-right: 5px;
          position: relative;
          top: 5px;
        }
      }
      .router-link-active{
        background: #424A60;
        width: 100%;
        margin-left: 0px;
        padding-left: 40px;
        border-left: 5px solid deepskyblue;
        color:#fff;
        i{
          transition: all 0.3s ease-in-out;
          color:#00AAFF;
        }
      }
      div{
        display: none;
        margin-top: 0;
      }
      .router-link-active + div{
        display: block;
        animation: show .3s linear 0s;
        animation-fill-mode:forwards;
      }
      .branch {
        height: 40px;
        line-height: 40px;
        > a{
          border-left: 5px solid #2B333E;
          border-top: 1px solid #2b333e;
          padding-left: 60px;
          margin-left: 15px;
          height: 39px;
          line-height: 40px;
        }
      }
      a:hover{
        color:#fff;
        i{
          transition: all 0.3s ease-in-out;
          color:#00AAFF;
        }
      }
    }
  }
}
  @keyframes show {
    0%{
      margin-top: -20px;
    }
    30%{
      margin-top: -5px;
    }
    60%{
      margin-top: -3px;
    }
    100%{
      margin-top: 0;
    }
  }
</style>
