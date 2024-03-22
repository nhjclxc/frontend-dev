// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

Vue.config.productionTip = false

console.log('main.js');

// 创建vue实列vm
new Vue({
  render: h => h(App),

  // 绑定全局消息总线
  beforeCreate() {
    // 往vue的原型上面绑定一个$bus的vue实列变量，使得每一个vueComponent都可以访问到$bus，这样，欸一个组件之间就可以传递消息了
    Vue.prototype.$bus = this
  },
}).$mount('#app')

// 全局事件总线适应场景：祖先组件给后代组件传递数据、兄弟组件间传递数据、叔伯组件间传递数据
// props和自定义事件适应场景：父子组件间通信


  
// 1、注册全局消息总线
// 2、在全局消息事件总线上面绑定事件
// 3、触发在全局消息事件总线上面绑定的事件
// 4、在绑定了全局消息事件总线的VueComponent实列对象销毁前，解绑全局消失事件总线上面绑定的事件