<template>
  <div class="container" :class="{blueBackground:!navToggle}">
    <aside :class="{ activeNar: aside, nonNar: !aside}">
      <span>小小技术，不成敬意</span><b @click="removeAside()">×</b>
    </aside>
    <div class="shadow">

    </div>
    <nav>
      <b class="interButton" :class="{rotateX0: navToggle, rotateX90: !navToggle}" @click="navToggle=!navToggle; removeAside()">×</b>
      <b class="outButton" :class="{rotateX90: navToggle, rotateX0: !navToggle}"  @click="navToggle=!navToggle"><span class="fa fa-reorder"></span></b>
      <ul ref="navbar" :class="{rotateX0: navToggle, rotateX90: !navToggle}">
        <li class="treeLi" v-if="'web superAdmin'.includes(role)">
          <router-link to="/home/vue/" append>
            <b @click="jump(0)"><i class="icon-vue"></i><span>vue-cli开发</span></b>
          </router-link>
          <div v-if="navBar[0]">
            <ul>
              <li class="branch"><router-link to="/home/vue/init"><span>init</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/package"><span>npm包</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/use"><span>配置包</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/proxy"><span>代理</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/build"><span>发布</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/layout"><span>懒加载</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/ps"><span>psSVG</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/skin"><span>换肤</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/listObj"><span>数组对象</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/mixin"><span>复用的数据或方法</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/directive"><span>自定义指令(drag)</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/COC"><span>干涉他人组件</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/vueAuthority"><span>简单的权限控制</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/baiduMap"><span>按需加载的百度地图</span></router-link></li>
              <li class="branch"><router-link to="/home/vue/vueWatch"><span>watch</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'web superAdmin'.includes(role)">
          <router-link to="/home/git">
            <b @click="jump(1)"><i class="icon-git"></i><span>git命令</span></b>
          </router-link>
          <div v-if="navBar[1]">
            <ul>
              <li class="branch"><router-link to="/home/git/reset"><span>reset 版本回退</span></router-link></li>
              <li class="branch"><router-link to="/home/git/force"><span>强制推送</span></router-link></li>
              <li class="branch"><router-link to="/home/git/forceOneFile"><span>取消add的内容</span></router-link></li>
              <li class="branch"><router-link to="/home/git/gitignore"><span>.gitignore</span></router-link></li>
              <li class="branch"><router-link to="/home/git/checkoutOrigin"><span>拉取远程到本地</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'web superAdmin'.includes(role)">
          <router-link to="/home/nginx">
            <b @click="jump(2)"><i class="icon-nginx"></i><span>Nginx</span></b>
          </router-link>
          <div v-if="navBar[2]">
            <ul>
              <li class="branch"><router-link to="/home/nginx/http"><span>http</span></router-link></li>
              <li class="branch"><router-link to="/home/nginx/wechat_https"><span>wechat_https</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-if="'python superAdmin'.includes(role)">
          <router-link to="/home/python">
            <b @click="jump(3)"><i class="icon-python icon-rotate"></i><span>python</span></b>
          </router-link>
          <div v-if="navBar[3]">
            <ul>
              <li class="branch"><router-link to="/home/python/pythonBase"><span>python基础</span></router-link></li>
              <li class="branch"><router-link to="/home/python/pythonCore"><span>python核心</span></router-link></li>
              <li class="branch"><router-link to="/home/python/postgresql"><span>postgresql</span></router-link></li>
              <li class="branch"><router-link to="/home/python/postgresqlCore"><span>postgresqlCore</span></router-link></li>
              <li class="branch"><router-link to="/home/python/getopt"><span>带参脚本</span></router-link></li>
              <li class="branch"><router-link to="/home/python/pythonScript"><span>脚本demo</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'python superAdmin'.includes(role)">
          <router-link to="/home/Django">
            <b @click="jump(4)"><i class="icon-django"></i><span>Django</span></b>
          </router-link>
          <div v-if="navBar[4]">
            <ul>
              <li class="branch"><router-link to="/home/Django/install"><span>install</span></router-link></li>
              <li class="branch"><router-link to="/home/Django/virtualenv"><span>虚拟环境</span></router-link></li>
              <li class="branch"><router-link to="/home/Django/init"><span>初始化环境</span></router-link></li>
              <li class="branch"><router-link to="/home/Django/static"><span>css/js/tpl引入</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'web superAdmin'.includes(role)">
          <router-link to="/home/js">
            <b @click="jump(5)"><i class="icon-js"></i><span>js</span></b>
          </router-link>
          <div v-if="navBar[5]">
            <ul>
              <li class="branch"><router-link to="/home/js/deepCopy"><span>深度拷贝</span></router-link></li>
              <!--<li class="branch"><router-link to="/home/python/postgresqlCore"><span>postgresqlCore</span></router-link></li>-->
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'python superAdmin'.includes(role)">
          <router-link to="/home/linux">
            <b @click="jump(6)"><i class="icon-ubuntu"></i><span>linux(Ubuntu)</span></b>
          </router-link>
          <div v-if="navBar[6]">
            <ul>
              <li class="branch"><router-link to="/home/linux/tar"><span>压缩</span></router-link></li>
              <li class="branch"><router-link to="/home/linux/map"><span>地图服务器需要的知识</span></router-link></li>
              <li class="branch"><router-link to="/home/linux/delete"><span>rm</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'python superAdmin'.includes(role)">
          <router-link to="/home/computer">
            <b @click="jump(7)"><i class="icon-computer"></i><span>计算机</span></b>
          </router-link>
          <div v-if="navBar[7]">
            <ul>
              <li class="branch"><router-link to="/home/computer/bootstrapping"><span>window开机自启动</span></router-link></li>
            </ul>
          </div>
        </li>
        <li class="treeLi" v-show="'web superAdmin'.includes(role)">
          <router-link to="/home/interview">
            <b @click="jump(8)"><i class="icon-computer"></i><span>面试题</span></b>
          </router-link>
          <div v-if="navBar[8]">
            <ul>
              <li class="branch"><router-link to="/home/interview/first"><span>第一题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/second"><span>第二题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/third"><span>第三题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/fourth"><span>第四题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/fifth"><span>第五题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/sixth"><span>第六题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/seventh"><span>第七题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/eighth"><span>第八题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/ninth"><span>第九题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/tenth"><span>第十题</span></router-link></li>
              <li class="branch"><router-link to="/home/interview/eleventh"><span>第十一题</span></router-link></li>
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
      navBar: [false, false, false, false, false, false, false, false, false],
      aside: true,
      navToggle: true,
      background: 'blue',
      role: sessionStorage.getItem('ROLE')
    }
  },
  methods: {
    jump (index) {
      let arr1 = [false, false, false, false, false, false, false, false, false]
      arr1[index] = true
      let arr2 = [false, false, false, false, false, false, false, false, false]
      if (this.navBar[index] === true) {
        this.navBar = arr2
      } else {
        this.navBar = arr1
      }
    },
    removeAside () {
      this.aside = false
    },
    jumpUrl (str) {
      console.log(str)
    }
  },
  mounted () {
    this.$nextTick(function () { // 确保F5刷新后navbar的状态是对的
      for (let i = 0; i < this.$refs['navbar'].children.length; i++) {
        let li = this.$refs['navbar'].children[i]
        if (li.children[0].className === 'router-link-active') {
          this.jump(i)
        }
      }
    })
  }
}
</script>

<style scoped lang="less">
/* PC */
@media screen and (min-width:1024px){
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
  line-height: 80px;
  >span{
    font-size: 30px;
    margin-left: 30px;
  }
  >b{
    display: none;
  }
}
.shadow{
  top: 0;
  width: 100%;
  height: 85px;
  position: fixed;
  box-shadow: 2px 2px 3px 1px #ddd;
  z-index: -5;
}
.table{
  display: table;
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
  .interButton,.outButton {
        display: none;
      }
  }
}
/* mobile */
@media screen and (max-width:1024px){

  .container{
    transition: all 0.3s ease-in-out;
    a{
      color: #fff;
    }
    position: fixed;
    overflow: hidden;
    top: 0;
    bottom: 0;
    border-top: 44px solid #fff;
    border-bottom: 34px solid #fff;
    left: 0;
    right: 0;
    aside{
      perspective: 1px;
      transition: all 0.3s ease-in-out;
      font-size: 26px;
      text-align: center;
      b{
        color: #ccc;
      }
    }
    .activeNar{
      height: 36px;
      transform:rotateX(0deg);
    }
    .nonNar {
      height: 0;
      transform:rotateX(90deg);
    }
    nav{
      position: relative;
      float: left;
      width: 100%;
      .router-link-active{
        width: 100%;
        color:#fff;
      }
      ul{
        transform-origin: 0 0;
        background: #E66666;
        transition: all 0.3s ease-in-out;
        float: left;
        perspective: 1px;
        width: 100%;
      }
      a>b>i{
        margin: 0 10px;
      }
      .treeLi{
        font-size: 20px;
        padding:0 3px;
        a{
          border-radius: 3px;
          box-sizing: border-box;
          transition: all 0.3s ease-in-out;
          padding:5px 0;
          text-align: center;
          float: left;
          width: 100%;
          >b{
            float: left;
            width: 100%;
          }
        }
        > a + div {
          margin-left: 40px;
          margin-right: 40px;
        }
      }
      .branch{
        font-size: 18px;
        text-align: center;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        .router-link-active{
          background: #e66666;
          box-shadow: 0px 0px 8px #e03333 inset;
        }
      }
      .interButton,.outButton {
        perspective: 1px;
        transform-origin: 0 0;
        position: absolute;
        z-index: 40;
        right: 10px;
        top: 0;
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        transition: all 0.3s ease-in-out;
      }
      .router-link-active{
        background: #960000;
      }
      .rotateX90 {
        transform: rotateX(91deg);
        height: 0;
      }
      .rotateX0 {
        transform: rotateX(0deg);
        height: 100%;
      }
    }
    main{
      overflow: scroll;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
  .blueBackground{
    border-top: 44px solid #E66666;
    border-bottom: 34px solid #E66666;
    transition: all 0.3s ease-in-out;
  }
  .blackBackground{
    border-top: 44px solid #333;
    border-bottom: 34px solid #333;
    transition: all 0.3s ease-in-out;
  }
  .writeBackground{
    border-top: 44px solid #fff;
    border-bottom: 34px solid #fff;
    transition: all 0.3s ease-in-out;
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
