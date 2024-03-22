// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 导入插件
import plugins from './plugins'

// 使用插件
Vue.use(plugins)

Vue.config.productionTip = false

console.log('main.js');

// 创建vue实列vm
new Vue({
  render: h => h(App),
}).$mount('#app')