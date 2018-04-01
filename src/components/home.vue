<template>
  <div>
    <aside>

    </aside>
    <div class="shadow">

    </div>
    <nav>
      <ul ref="navbar">
        <li class="treeLi">
          <router-link to="/home/vue"><b @click="print(0)"><i class="fa fa-viacoin"></i><span>vue-cli开发</span></b></router-link>
          <div v-if="navBar[0]">
            <ul>
              <li class="branch"><router-link to="/home/vue/init"><span>init</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/package"><span>npm包</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/use"><span>配置包</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/proxy"><span>代理</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/build"><span>发布</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/layout"><span>懒加载</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/git">
            <b @click="print(1)"><i class="fa fa-git"></i><span>git命令</span></b>
          </router-link>
          <div v-if="navBar[1]">
            <ul>
              <li class="branch"><router-link to="/home/git/reset"><span>reset 版本回退</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/nginx">
            <b @click="print(2)"><i class="fa fa-chrome"></i><span>Nginx</span></b>
          </router-link>
          <div v-if="navBar[2]">
            <ul>
              <li class="branch"><router-link to="/home/nginx/http"><span>http</span></router-link></li>
              <li class="branch"><router-link to="/home/nginx/wechat_https"><span>wechat_https</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/python">
            <b @click="print(3)"><i class="fa fa-product-hunt"></i><span>python</span></b>
          </router-link>
          <div v-if="navBar[3]">
            <ul>
              <li class="branch"><router-link to="/home/python/postgresql"><span>postgresql</span></router-link></li>
              <li class="branch"><router-link to="/home/python/postgresqlCore"><span>postgresqlCore</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi">
          <router-link to="/home/Django">
            <b @click="print(4)"><i class="fa fa-product-hunt"></i><span>Django</span></b>
          </router-link>
          <div v-if="navBar[4]">
            <ul>
              <li class="branch"><router-link to="/home/Django/install"><span>install</span></router-link></li>
              <!--<li class="branch"><router-link to="/home/python/postgresqlCore"><span>postgresqlCore</span></router-link></li>-->
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <main>
      <div class="table"></div>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navBar: [false, false, false, false]
    }
  },
  methods: {
    print (index) {
      let arr1 = [false, false, false, false]
      arr1[index] = true
      let arr2 = [false, false, false, false]
      if (this.navBar[index] === true) {
        this.navBar = arr2
      } else {
        this.navBar = arr1
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      console.log(this.$refs)
    })
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
.table{
  display: table;
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
        margin-top: 0;
      }
      b{
        display: block;
        width: 100%;
        margin-left: -45px;
        padding-left: 45px;
      }
      .router-link-active + div{
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
