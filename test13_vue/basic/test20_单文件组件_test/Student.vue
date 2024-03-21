
<template>
    <div @click="showInfo">
        <div>学生姓名：{{ studentName }}</div>
        <div>学生成绩：{{ studentScore }}</div>
    </div>
</template>

<style>
    /* div {
        background-color: #9aefd7;
    } */
</style>

<script>
    export default {
       name: 'Student',
       data() {
          return {
            studentName: '张三',
            studentScore: 66
          }
       },
       methods: {
             showInfo(){
                console.log('学生信息');
             }
       },
    }
</script>