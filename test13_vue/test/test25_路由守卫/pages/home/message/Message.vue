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

                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>

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
        pushShow(m){

            // this.$router.back()  路由记录（页面）向后退一步
            // this.$router.forward()  路由记录（页面）向前进一步
            // this.$router.go(step)  路由记录（页面）向step方向走，step>0向前，step<0向后


            // push和replace叫编程式路由导航，可以脱离router-link标签（即原始的a标签）可以由于与任何事件上
            // push和replace里面的传参和router-link标签里面to属性的对象传参方式一样
            this.$router.push({
                path: '/home/message/detail',
                query: {
                    msg: m.msg
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                path: '/home/message/detail',
                query: {
                    msg: m.msg
                }
            })
        }
       },
}
</script>

<style scoped>
    li {
        font-size: 11px;
    }
</style>
