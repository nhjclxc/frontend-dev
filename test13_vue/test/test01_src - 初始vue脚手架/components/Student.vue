
<template>
    <div @click="showInfo" id="student">
        <div>学生姓名：{{ studentName }}</div>
        <div>学生成绩：{{ studentScore }}</div>
    </div>
</template>

<style>
    #student {
        background-color: #e9ef9a;
    }
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