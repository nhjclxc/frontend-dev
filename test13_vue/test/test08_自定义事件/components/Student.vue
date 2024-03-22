
<template>
    <div class="myDiv">
        <div >姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        
        <button @click="sendStudentName">发送学生名字</button>
        <button @click="unBind">解绑事件</button>
    </div>
</template>

<script>

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
                // 触发组件事件 
                this.$emit('send', this.name, Date.now())
            },
            unBind(){
                this.$off('send')
                console.log('send事件已解绑');

                // 解绑单个事件
                // this.$off('send')
                // 解绑多个事件
                // this.$off(['send', 'send2', 'send3'])
                // 解绑全部事件
                // this.$off()
            }
        },
    }
</script>


<style scoped>
    .myDiv{
        background-color: rgb(223, 255, 127);
    }
</style>