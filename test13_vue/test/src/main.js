// 引入Vue 注意不是使用require
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// // 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI所有样式
// import 'element-ui/lib/theme-chalk/index.css';
// //使用ElementUI插件
// Vue.use(ElementUI);


// 按需引入
import { Button, Progress, Carousel, CarouselItem } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Progress.name, Progress);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
/* 或写为
 * Vue.use(Button)
 */

Vue.config.productionTip = false

console.log('main.js');



// 创建vue实列vm
new Vue({
  render: h => h(App),
}).$mount('#app')

