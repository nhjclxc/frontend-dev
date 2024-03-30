<template>
    <div>
       测试screenfull
       <button @click="enter">开启全屏</button>
       <button @click="exit">退出全屏</button>
       <button @click="toggle">切换全屏</button>
       <hr>

        <div id="box1" ref="fullscreenElement">
            <button @click="enterForElement">指定元素开启全屏</button>
            <button @click="exitForElement">指定元素退出全屏</button>
            <button @click="toggleForElement">指定元素切换全屏</button>
        </div>

    </div>
</template>

<script>

    import screenfull from "screenfull";

    export default {
       name: 'ScreenfullTest',
       data() {
          return {
             
          }
       },
       methods: {
        enter(){
            screenfull.request(); // 全屏
        },
        exit(){
            screenfull.exit(); // 退出全屏
        },
        toggle(){
            screenfull.toggle(); // 全屏切换
        },

        enterForElement(){
            if (screenfull.isEnabled && !screenfull.isFullscreen) {
                screenfull.request(this.$refs.fullscreenElement);
            }
        },
        exitForElement(){
            screenfull.exit(this.$refs.fullscreenElement); // 退出全屏
        },
        toggleForElement(){
            screenfull.toggle(this.$refs.fullscreenElement); // 全屏切换
        },
             
       },
       mounted() {
        console.log('screenfull.isFullscreen', screenfull.isFullscreen);; // 布尔值——当前页面是否全屏
        console.log('screenfull.isEnabled', screenfull.isEnabled);; // 布尔值——当前浏览器是否支持全屏
       },   
}
</script>

<style scoped>
    #box1 {
        height: 600px;
        width: 800px;
        background-color: aqua;
    }
</style>