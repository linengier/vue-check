// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);  // 组件配置使用文档	https://www.iviewui.com/
Vue.use(Vuex);	// 路由配置使用文档	https://vuex.vuejs.org

const nav={
	state:{
		mode:'vertical',  
		theme:'dark',
		active:'首页',
		accordion:false,
		open:[],
		list:[
		{
			title:'首页',
			link:'/',
			icon:'ios-analytics',
		},
		{
			title:'组件',
			link:'/Components',
			icon:'search',
			children:[
			{
				title:'图标',
				link:'/Icon'
			},{
				title:'按钮',
				link:'/Button'
			}
			]
		}
		]
	},
	mutations:{
		onActive(newState,active){
			console.log('选中'+active);
			newState.active=active;
		}
	}
}
const store=new Vuex.Store({
	modules:{
		'nav':nav
	}
})
// /* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
