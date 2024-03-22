
<template>
    <div >
        <h3>消息：{{ msg }}</h3>
        <div>姓名：{{ name }}</div>
        <div>年龄：{{ age + 1 }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '尚硅谷vue框架学习',
                // name: '尚硅谷',
                // age: '北京昌平'
            }
        },
        // 使用props来接受被调用时传入的参数

        // 1.简单接收
        // props: ['age', 'name'] 

        // 2.指定数据类型接收
        // props: {
        //     age: Number,
        //     name: String,
        // }

        // 3.指定数据类型接收，并且加上必传或默认配置
        props:{
            name: {
                type: String, // 限制name的类型
                required: true // 限制name是否必传
            },
            age: {
                type: Number, 
                default: 66 // 当age属性没传时，给一个默认值，
                // 注意：required和default一般不能同时出现
            },
        }
    }
</script>