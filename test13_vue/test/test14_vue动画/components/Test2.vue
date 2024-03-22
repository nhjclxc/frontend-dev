
<template>
    <div>
        <button @click="isShow = !isShow">点击切换</button>

        <!-- 在vue里面将要显示动画的标签放在transition里面。如果有多个标签要实用transition-gropu，此时要给里面的每一个标签指定key -->
        <!-- appear表示一上来的时候就使用该动画 -->
        <!-- name里面写的就是第三方库指定的名字 ，必须指定为animate_animated animate_bounce，表示使用animate的动画  -->
        <!-- 指定具体的样式去：https://animate.style/ 上面找 -->
        <!-- enter-active-class表示进入动画 leave-active-class表示离开动画-->
        <transition 
            appear
            name="animate_animated animate_bounce"
            enter-active-class="animate__bounceIn"
            leave-active-class="animate__zoomInUp"
          >
            <h2 class="box" v-show="isShow">{{ name }}</h2>
        </transition>
    </div>
</template>

<script>

// https://v2.cn.vuejs.org/v2/guide/transitions.html


    // 动画效果实用第三方库：animate.css 【npm i animate.css】
    // 因为它不是js类型，所以直接import "animate.css" 引入。
    // 教程：https://www.npmjs.com/package/animate.css/v/3.7.0、https://github.com/michaelrhodes/animate#readme、https://animate.style/
    import "animate.css" 

    export default {
        name: 'Test',
        data() {
            return {
                name: 'hello',
                isShow: true
            }
        },
    }
</script>


<style scoped>
    .box{
        height: 50px;
        background-color: rgb(223, 255, 127);
    }
</style>