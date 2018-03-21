const mutations = {
  addition: state => state.count++,
  minus: state => state.count--,
  setZero: state => {
    state.count = 0
  }
}

export default mutations
