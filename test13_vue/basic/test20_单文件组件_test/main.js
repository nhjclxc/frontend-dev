
// 引入App组件
import App from "./App.vue";

console.log('333');
// 在Vue的实列对象vm身上注册app组件
new Vue({
    el:'#root',
    template: `<App>aaa</App>`,
    components: {
        App
    }
})