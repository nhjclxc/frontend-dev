<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
    export default {
       name: 'About',
       data() {
          return {
             
          }
       },
       methods: {
             
       },
       // 有以下输出可知，当进行路由切换的时候，路由组件是被销毁的，而不是被隐藏
    //    beforeDestroy() {
    //         console.log('About, beforeDestroy');
    //    },
    //    mounted() {
    //     console.log('About, mounted');
    //    },
    
    //4、组件内路由守卫
    beforeRouteEnter (to, from, next) {
        // ...
        console.log('进入 about组件内部守卫');
        next()
    },
    beforeRouteLeave (to, from, next) {
        // ...
        console.log('离开 about组件内部守卫');
        next()
    },
    
}
</script>
