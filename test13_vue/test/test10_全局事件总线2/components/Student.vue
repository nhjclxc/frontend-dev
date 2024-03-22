
<template>
    <div class="myDiv">
        <div >姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
        <button @click="sendStudentName">发送学生姓名给学校</button>
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
            /*
            全局事件总线：
                谁要接收数据，谁就绑定自定义事件，使用$on；在VueComponent实列对象被销毁前还应当解绑绑定了的事件，使用$off。
                谁要发送数据，谁就触发该自定义事件，使用$emit。
            $on是绑定事件，$off时解绑事件，$emit是触发事件
            */
            sendStudentName(){
                // 因为学生组件要给学校组件发消息，那么学生组件就是要触发某一个事件，所以使用$emit来触发
                // this指的就是当前的School的vueComponent实列对象，因为在main.js里面创建Vue实列对象的时候绑定了一个$bus，所以这个vueComponent的实列对象也可以拿到$bus
                // $emit表示触发对象绑定的某一个事件，第一个参数是事件名称，后面可以接收多个参数表示的是触发该事件要传递的参数
                this.$bus.$emit('send', this._data)
            }
        },
    }
</script>


<style scoped>
    .myDiv{
        background-color: rgb(223, 255, 127);
    }
</style>