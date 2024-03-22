import Vue from 'vue'
import App from './App.vue'

console.log('main.js');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
// render的演变
// js原生
new Vue({
  render(createElement){
    return createElement(App)
  }
}).$mount('#app')

// es6 箭头函数
new Vue({
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#app')

// es6 函数参数只有一个参数时省略()
new Vue({
  render: createElement => {
    return createElement(App)
  }
}).$mount('#app')

// es6 函数体里面只有一条语句的时候可以神略大括号和return
new Vue({
  render: createElement => createElement(App)
}).$mount('#app')

// 变量缩写
new Vue({
  render: h => h(App)
}).$mount('#app')


*/