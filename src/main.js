import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import lazyload from 'vue-lazyload'

import Toast from 'components/common/toast/index.js'
// 创造事件总线模型
Vue.prototype.$bus = new Vue()
//解决移动端300毫秒点击延迟
FastClick.attach(document.body)
Vue.config.productionTip = false
//安装自己封装的 Toast 插件
Vue.use(Toast)
//图片懒加载
Vue.use(lazyload,{
  loading: require('./assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')








// axios({
//   url:'http://152.136.185.210:7878/api/m5/home/data',
//   params:{
//     type:'pop',
//     page: 2
//   }
// }).then(res => {
//   console.log(res.data)
// })