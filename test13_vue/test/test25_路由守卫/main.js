// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 使用路由插件
Vue.use(VueRouter)

// 引入自定义路由配置
// import router from './router/index.js'
import router from './router'


Vue.config.productionTip = false

console.log('main.js');



// 创建vue实列vm
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')



/**
 * https://router.vuejs.org/zh/guide/
 * 
 * 1、安装路由插件
 *    npm i vue-router@3 【vue2使用vue-router@3，vue3使用vue-router@4】
 * 2、Vue上应用路由插件
 *    Vue.use()
 * 3、配置路由
 *    ./router\index.js
 * 4、在vue实列对象vm上面使用使用
 *    router: router
 * 5、检测路由是否配置成功
 *    打开页面路径上面出现/#/即表示成功，【http://localhost:8080/#/】
 * 6、使用router-link标签来进行路由跳转
 *    使用路由切换标签：<router-link...
 *    指定路由切换位置：<router-view>
 *    
 */

// 注意，路由有使用bootstrap
// <link rel="stylesheet" href="<%= BASE_URL %>css/bootstrap.css">
