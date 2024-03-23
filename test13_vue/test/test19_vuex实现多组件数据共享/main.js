// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 3、在Vue中引入store，使用store
import store from './store/index.js'

Vue.config.productionTip = false

console.log('main.js');



// 创建vue实列vm
new Vue({
  render: h => h(App),
  // 4、将store交给Vue实列对象vm管理
  store,
}).$mount('#app')



/* 

Vuex：https://vuex.vuejs.org/zh/guide/

使用vuex步骤：
  1、安装vuex包：npm install vuex@3  【vue2使用vuex@3，vue3使用vuex@4】
  2、配置store   ./store/index.js
      import Vuex from 'vuex'
      Vue.use(Vuex)   【vuex本质上是一个插件】
  3、在Vue中引入store，使用store
  4、将store交给Vue实列对象vm管理
*/