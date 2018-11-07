import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
const state={
	flag:"flag",
	count:"1",
	isShowNav:true
}
//计算属性
var getters={
	count(state){
		return state.count
	},
	shownav(state){
		return state.isShowNav
	}
};
//管理mutations
const actions={
	abc:({commit,state})=>{
    commit('abc')
	},
	add:({commit,state})=>{
    commit('add')
	},
	del:({commit,state})=>{
    commit('del')
	},
	hideNav:({commit,state})=>{
    commit('hideNav')
	},
	showNav:({commit,state})=>{
    commit('showNav')
	}
}
//改变状态
const mutations={
	abc:(state)=>{
    state.flag='mutations'
	},
	add:(state)=>{
		state.count++;
	},
	del:(state)=>{
		state.count--;
	},
	hideNav:(state)=>{
		state.isShowNav=false;
	},
	showNav:(state)=>{
		state.isShowNav=true;
	}
};
const store=new vuex.Store({
	state,
	getters,
	actions,
	mutations
})
//导出store对象
export default store;

