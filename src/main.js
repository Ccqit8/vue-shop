// 1.1引入vue第三方包
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import ElementUi from 'element-ui'


// 1.2引入其他与vue无关的第三方包
import axios from 'axios'
// 1.3导入样式
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './css/style.css'
import './assets/less/index.less'
// 2引入自己的
// 根组件

// 路由实例
import router from './router'
// 路由接口配置
import api from './js/api-config'
import { domain } from './js/api-config';
// 导入过滤器插件
import MyFilter from './filter';
//导入全局状态
import Store from '@/Store/index.js';
// 3.1 统一use 启动vue插件
Vue.use(Vuex);
Vue.use(ElementUi);
Vue.use(MyFilter);
// 3.2统一添加配置
// 一配置, 以后所有的请求就会自动使用这个域名
axios.defaults.baseURL=domain;
// 浏览器有个跨越问题，如果有跨域问题,可以发送异步请求
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios;
Vue.prototype.$api=api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:new Vuex.Store(Store)
})
