

<template>
    <div>
        安装.vue文件支持的语法高亮插件：Vetur By Pine Wu 
        在template标签里面写html相关的标签

        在template标签里面只能存在一个根元素标签

        注意在.vue文件里面只能存在三个标签：分别是template表示结构，style表示样式，script表示形为

        在浏览器渲染阶段template标签是不会参与的，实际渲染出来的只有template里面的div
    </div>
</template>

<style>
/* 在style标签里面写css样式相关的代码 */
    .demo{
        color: yellow
    }
</style>


<script>
// 在script标签里面写js相关的数据，交互代码
    // 模拟创建组件
    const TestComponent = {} // ...

    // 注意：vue模块创建完毕之后必须向外暴露

    // 1.分别暴露，也叫多行暴露，在引入时需要用对象来引用
    export const TestComponent2 = {} // ...

    // 2.统一暴露，
    export { TestComponent , TestComponent2 }

    // 一般使用默认暴露
    // 3.默认暴露 ，一个js文件中只能有一个默认暴露，默认暴露的可以是一个常量，函数，对象等。
    // export default {TestComponent , TestComponent2}

    // 默认暴露简写
    // export default Vue.extend({}) // ...
    export default {
        name: 'Test', //组件名一般与文件名保持一直
        data() {
            return {
                
            }
        },methods: {
            
        },
    } // ...


</script>