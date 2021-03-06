//插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  // 设置基准地址
  axios.defaults.baseURL = 'http://api.xiaomadagege.cn:3001/api/private/v1/'
  //添加实例方法
  Vue.prototype.$http = axios
}

export default MyHttpServer