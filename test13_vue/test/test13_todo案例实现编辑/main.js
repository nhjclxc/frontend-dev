// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

Vue.config.productionTip = false

console.log('main.js');

// 创建vue实列vm
new Vue({
  render: h => h(App),

  // 1、注册全局消息总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')


  
// 1、注册全局消息总线
// 2、在全局消息事件总线上面绑定事件
// 3、触发在全局消息事件总线上面绑定的事件
// 4、在绑定了全局消息事件总线的VueComponent实列对象销毁前，解绑全局消失事件总线上面绑定的事件