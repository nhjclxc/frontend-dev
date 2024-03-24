<template>
    <div>
        <h2>Message 的内容</h2>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 传递query参数方式一：直接在路径上拼接 -->
                <!-- :to前面的:就是v-bind的简写 -->
                <!-- <router-link :to="`/home/message/detail?msg=${m.msg}`"> {{ m.msg }}</router-link> -->

                <!-- 传递query参数的方式二：将to数据写成对象形式 -->
                <!-- path数据还是按照原来的方式写 -->
                <!-- query参数写成一个对象 -->
                <router-link :to="{
                        path: '/home/message/detail',
                        query: {
                            msg: m.msg
                        }
                    }"> 
                    {{ m.msg }}
                </router-link>


            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
       name: 'Message',
       data() {
          return {
             messageList: [
                {id: 'msg001', msg: '我是消息 111'},
                {id: 'msg002', msg: '我是消息 222'},
                {id: 'msg003', msg: '我是消息 333'},
             ]
          }
       },
       methods: {
             
       },
}
</script>
