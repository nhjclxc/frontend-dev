
// 混合可以理解为就是多个组件的公共配置（全局配置）

// 第一个大括号相当于是Vue.extend({})里面的大括号，在里面可以写的配置在下面的大括号里面也可以写
export const mixin = {
    methods: {
        showInfo(){
            console.log('mixin', this.name)
        }
    },
    mounted() {
        console.log(this.name + ' mounted')
    },
}