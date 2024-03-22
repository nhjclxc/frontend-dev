
<template>
    <div class="myDiv">
        <div > 名称 {{ name }}</div>
        <div>地址 {{ addr }}</div>
    </div>
</template>

<script>

    // 第一步：安装消息中间件：npm i pubsub-js，并且导入使用
    import pubsub from 'pubsub-js'

/*
    // 需要数据的组件订阅消息
    // 有数据的组件发布消息

    第一步：安装消息中间件：npm i pubsub-js，并且导入使用
    第二步：消息订阅者订阅消息
    第三步：消息发布者发布消息
    第四步：消息订阅者退订消息
*/
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷,尚硅谷,尚硅谷,尚硅谷 ',
                addr: '北京昌平'
            }
        },
        mounted(){
            // 第二步：消息订阅者订阅消息
            this.$pubId = pubsub.subscribe('sendStudentNameTopic', function(msgName, data) {
                console.log('this: ', this); // undefined
                console.log('School ', msgName, data);
            })
            // 第二步：消息订阅者订阅消息
            pubsub.subscribe('sendStudentNameTopic', (msgName, data) => {
                console.log('this: ', this); // 当前的VueComponent实列对象
                console.log('School ', msgName, data);
            })
        },
        beforeDestroy() {
            // 第四步：消息订阅者退订消息
            pubsub.unsubscribe(this.$pubId)
        }
    }
</script>

<style scoped>
    .myDiv{
        background-color: aquamarine;
    }
</style>