import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
const state = {
	addCartList: []
};
export default new Vuex.Store({
	//定义状态
	state,
	// 方法
	mutations,
	//相当与vue的计算属性  当数据需要经过一系列的变化的时候就用到这个
	getters,
	actions,
	modules: {}
});
