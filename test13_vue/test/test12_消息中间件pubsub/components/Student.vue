
<template>
    <div class="myDiv">
        <div >姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="sendStudentName">发送学生姓名给学校</button>
    </div>
</template>

<script>
    // 第一步：导入使用
    import pubsub from 'pubsub-js'

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
        methods: {
            sendStudentName(){
                // console.log('sss');
                // 第三步：消息发布者发布消息
                pubsub.publish('sendStudentNameTopic', this.name)
            }
        },
    }
</script>


<style scoped>
    .myDiv{
        background-color: rgb(223, 255, 127);
    }
</style>