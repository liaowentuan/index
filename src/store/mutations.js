const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  setcrement: state => {
    state.count = 0
  },
  updatePlayerStatus: state => {
    if (state.playerStatus < 4) {
      state.playerStatus++
    } else {
      state.playerStatus = 1
    }
  },
  setPlayerStatus: state => {
    state.playerStatus = 1
  }
}

export default mutations
