import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //定义状态
  state: {
    addCartList:[],
  },
  // 方法
  mutations: {
    // 默认有一个参数state  就是上面的数据状态
    pushCart(state,payload){
      // 将数据push到state数据里面
      state.addCartList.push(payload)
    }
  },
  //相当与vue的计算属性  当数据需要经过一系列的变化的时候就用到这个
  getters: {
   
  },
  actions:{

  },
  modules: {
  }
})
