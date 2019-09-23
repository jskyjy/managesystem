import Vue from 'vue'
import Router from 'vue-router'
//  @ 是webpack封装好的，就代表了src文件夹
import Login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      name:'login',
      path:'/login',
      component:Login
    }
  ]
})
