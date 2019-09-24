// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入初始化的css文件
import '@/assets/css/reset.css'

import MyHttpServer from './plugins/http.js'
// 回顾axios
// import axios from 'axios'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MyHttpServer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render:(h) => h(App)  这行代码跟下面两行代码的作用是一样的
  components: { App },
  template: '<App/>'
})
