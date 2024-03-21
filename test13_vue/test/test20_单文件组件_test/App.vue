<template>
   <div>
    <!-- 第三步：使用组件 -->
    <School></School>
    <Student></Student>
   </div> 
</template>

<style>
div {
        background-color: #9aefd7;
    } 
</style>

<script>
    // 使用App组件来汇总所有组件

    // 第一步：引入组件
    // import 引入后的组件变量名 from '组件路径'
    // 注意：组件路径如果在本文件夹下那么要以./打头，如果在前级目录要以../打头
    import School from './School.vue'
    import Student from './Student.vue'

    // 注意：App组件也要向外暴露，App要给VUe的实列对象vm来使用，【简单点来说所有.vue的文件都要写暴露】
    export default {
        name: 'App',
        // 第二步：注册组件
        components: {
            School: School,
            Student
        }
    }
</script>