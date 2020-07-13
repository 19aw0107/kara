import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score:[],
    scores:[]
    /*score:{syouhai:0, count:0},
    score2:{syouhai:0, count:0}*/
  },
  /*state: {
    score: [{syouhai:"0", count:"0"}]//配列を作って1回目2回目3回目の勝ち負けの数値を保存する。
  }*/
  mutations: {
    increment(state,payload){
      var n = payload.kekkaNum;
      state.score.push(n);
      if(payload.kekkaNum===2){
        state.scores.push("引き分け"); // 引き分け
      }else if(payload.kekkaNum===1){
        state.scores.push("勝ち");
      }else{
        state.scores.push("負け");
      }
    }//これはスコアでやった方がいい？7.13
    //increment(state,payload){
      //state.syouhai = state.syouhai + "," + payload.kekkaNum
    //}
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
