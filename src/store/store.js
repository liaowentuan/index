import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    role: sessionStorage.getItem('ROLE') //  存储用户角色
  },
  mutations,
  getters
})
