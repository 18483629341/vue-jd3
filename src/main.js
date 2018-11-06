// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router.config"
import axios from 'axios'

import App from './App'
//import router from './router'
Vue.use(VueRouter);//
const router=new VueRouter({
  routes
});


Vue.config.productionTip = false
axios.defaults.baseURL='http://192.168.0.104:3333/';
axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded'
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //components: { App },
  //template: '<App/>',
  render:h=>h(App)  //2.0写法
})
