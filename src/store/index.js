import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: {syouhai:"", count:"0"},//配列を作って1回目2回目3回目の勝ち負けの数値を保存する。
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    count(state){
      return state.count
    }
  }
})
