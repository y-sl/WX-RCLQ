import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerVisiable: false
  },
  mutations: {
    show (state) {
      state.routerVisiable = true
    },
    hide (state) {
      state.routerVisiable = false
    }
  }
})
