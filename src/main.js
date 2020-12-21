import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 创造事件总线模型
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.use(router)

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