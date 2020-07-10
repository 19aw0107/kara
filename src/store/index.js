import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: {syouhai:"0", count:"0"}
    //syouhai:[],
    //count:0,//配列を作って1回目2回目3回目の勝ち負けの数値を保存する。score: {syouhai:"0", count:"0"}
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    count(state){
      return state.score.syouhai
    }
  }
})
