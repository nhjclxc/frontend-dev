// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

Vue.config.productionTip = false

console.log('main.js');

// 创建vue实列vm
new Vue({
  render: h => h(App),
  // 注册消息事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
