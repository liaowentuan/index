<template>
  <div>
    <el-row>
      <el-col :span="4" class="nav">
        <el-input class="nav-input" v-model="input" placeholder="输入摄像机名称搜索" @keyup.native="filterData(input)" :style="inputStyle" prefix-icon="el-icon-search"></el-input>
        <el-table class="nav-table" :data="cameraList.data" border max-height="500" style="width: 180px" highlight-current-row @current-change="handleCurrentRowsChange" :show-header="false">
          <el-table-column prop="name" label="摄像机" width="179px"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="20">
        <div class="player">
          <div class="playBody">
            <div v-if="playCount == 1">
              <div>
                <object style="width: 100%;height: 540px" type='application/x-vlc-plugin' ref='vlc' events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                  <!--<param name='mrl' value='{{camera.stream}}' id="vlc_mrl"/>-->
                  <param name="autoplay" value="true" />
                </object>
              </div>
            </div>
            <div v-if="playCount == 4" class="playerGroup">
              <el-row>
                <el-col :span="12" class="playerGroupItem">
                  <object style="width: 100%;height: 270px" type='application/x-vlc-plugin' ref='vlc1' events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                    <!--<param name='mrl' value='{{camera.stream}}' id="vlc_mrl"/>-->
                    <param name="autoplay" value="true" />
                  </object>
                </el-col>
                <el-col :span="12" class="playerGroupItem">
                  <object style="width: 100%;height: 270px" type='application/x-vlc-plugin' ref='vlc2' events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                    <!--<param name='mrl' value='{{camera.stream}}' id="vlc_mrl"/>-->
                    <param name="autoplay" value="true" />
                  </object>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="playerGroupItem">
                  <object style="width: 100%;height: 270px" type='application/x-vlc-plugin' ref='vlc3' events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                    <!--<param name='mrl' value='{{camera.stream}}' id="vlc_mrl"/>-->
                    <param name="autoplay" value="true" />
                  </object>
                </el-col>
                <el-col :span="12" class="playerGroupItem">
                  <object style="width: 100%;height: 270px" type='application/x-vlc-plugin' ref='vlc4' events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz">
                    <!--<param name='mrl' value='{{camera.stream}}' id="vlc_mrl"/>-->
                    <param name="autoplay" value="true" />
                  </object>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="playFooter">
            <el-row>
              <el-col :span="2" :offset="20" class="left-btn">
                <el-button type="text info" @click="playCount = 1">■</el-button>
              </el-col>
              <el-col :span="2">
                <el-button type="text info" icon="el-icon-menu" @click="playCount = 4"></el-button>
              </el-col>

            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
/**
  　　┏┓　　　┏┓+ +
  　┏┛┻━━━┛┻┓ + +
  　┃　　　　　　　┃ 　
  　┃　　　━　　　┃ ++ + + +
   ████━████ ┃+
  　┃　　　　　　　┃ +
  　┃　　　┻　　　┃
  　┃　　　　　　　┃ + +
  　┗━┓　　　┏━┛
  　　　┃　　　┃　　　　　　　　　　　
  　　　┃　　　┃ + + + +
  　　　┃　　　┃
  　　　┃　　　┃ +  神兽保佑
  　　　┃　　　┃    代码无bug　　
  　　　┃　　　┃　　+　　　　　　　　　
  　　　┃　 　　┗━━━┓ + +
  　　　┃ 　　　　　　　┣┓
  　　　┃ 　　　　　　　┏┛
  　　　┗┓┓┏━┳┓┏┛ + + + +
  　　　　┃┫┫　┃┫┫
  　　　　┗┻┛　┗┻┛+ + + +
 */
/* eslint-enable */
export default {
  name: 'realTime',
  data () {
    return {
      msg: 'realTime',
      cameraList: {
        data: []
      },
      cameraListCopy: {
        data: []
      },
      input: '',
      currentRow: [
        {
          stream: ''
        },
        {
          stream: ''
        },
        {
          stream: ''
        },
        {
          stream: ''
        }
      ],
      inputStyle: {
        width: '180px'
      },
      playCount: 1
    }
  }, //
  mounted: function () {
    this.$nextTick(function () {
      this.setPlayerStatus()
      this.$http({
        method: 'GET',
        url: '/controller/cameras/cameraNames'
      }).then((res) => {
        this.cameraList.data = res.data
        this.cameraListCopy.data = res.data
      }).catch((res) => {
        console.log(res)
      })
    })
  },
  methods: {
    filterData (queryString) {
      if (!queryString) {
        this.cameraList.data = this.cameraListCopy.data
      } else {
        this.cameraList.data = this.cameraListCopy.data.filter(this.createFilter(queryString))
      }
    },
    updatePlayerStatus () {
      this.$store.commit('updatePlayerStatus')
    },
    setPlayerStatus () {
      this.$store.commit('setPlayerStatus')
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    initPlayer (playerDom) {
      playerDom.style.display = 'none'
      playerDom.style.display = 'block'
      playerDom.playlist.stop()
      playerDom.playlist.items.clear()
    },
    runPlayer (playerDom, stream) {
      let itemId = playerDom.playlist.add(stream, 'live', ':network-caching=350')
      playerDom.playlist.playItem(itemId)
    },
    handleCurrentRowsChange (val) {
      if (this.playCount === 1) {
        this.currentRow[0]['stream'] = val.stream
        var vlc = this.$refs.vlc
        this.initPlayer(vlc)
        this.runPlayer(vlc, val.stream)
        this.setPlayerStatus()
      } else {
        if (this.playerStatus === 1) {
          this.currentRow[1]['stream'] = val.stream
          var vlc1 = this.$refs.vlc1
          this.initPlayer(vlc1)
          this.runPlayer(vlc1, val.stream)
        } else if (this.playerStatus === 2) {
          this.currentRow[2]['stream'] = val.stream
          var vlc2 = this.$refs.vlc2
          this.initPlayer(vlc2)
          this.runPlayer(vlc2, val.stream)
        } else if (this.playerStatus === 3) {
          this.currentRow[3]['stream'] = val.stream
          var vlc3 = this.$refs.vlc3
          this.initPlayer(vlc3)
          this.runPlayer(vlc3, val.stream)
        } else if (this.playerStatus === 4) {
          this.currentRow[0]['stream'] = val.stream
          var vlc4 = this.$refs.vlc4
          this.initPlayer(vlc4)
          this.runPlayer(vlc4, val.stream)
        }
        this.updatePlayerStatus()
      }
    }
  },
  updated: function () {
    this.$nextTick(function () {
      console.log('updated')
    })
  },
  computed: {
    playerStatus () {
      return this.$store.state.playerStatus
    }
  }
}
</script>

<style scoped lang="less">
.nav{
  text-align: center;
  .nav-input{
    margin:10px auto;
  }
  .nav-table{
    margin:0 auto;
  }
}
.player{
  margin: 0 30px 0 0;
  background: aqua;
  height: 580px;
  .playBody{
    width: 100%;
    height: 540px;
    .playerGroupItem{
      height:270px;
    }
  }
  .playFooter{
    width: 100%;
    height: 40px;
    background: #D7D7D7;
    .el-button{
      padding: 0;
    }
    .el-button--text{
      font-size: 20px;
      line-height: 40px;
      vertical-align: center;
    }
    .left-btn .el-button--text{
      font-size: 40px;
      margin-top: -5px;
    }
  }
}
</style>
