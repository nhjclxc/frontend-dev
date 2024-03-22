
<template>
    <div class="myDiv">
        <div > 名称 {{ name }}</div>
        <div>地址 {{ addr }}</div>
    </div>
</template>

<script>

    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷,尚硅谷,尚硅谷,尚硅谷 ',
                addr: '北京昌平'
            }
        },
        mounted() {
            /*
            全局事件总线：
                谁要接收数据，谁就绑定自定义事件，使用$on；在VueComponent实列对象被销毁前还应当解绑绑定了的事件，使用$off。
                谁要发送数据，谁就触发该自定义事件，使用$emit。
            $on是绑定事件，$off时解绑事件，$emit是触发事件
            */

            /*注意如果$on里面的回调函数要用到VueComponent实列对象的this指针，那么$on的回调函数必须写成 箭头函数=>，
            写成箭头函数后这个this才是VueComponent实列对象的this指针，否则如果写成function(){}的形式的话是Vue（也就是vm）实列对象，这样就拿不到当前VueComponent实列对象的属性和方法了*/
          


            // 由于school要接收数据，所以使用$on来绑定一个事件
            // this指的就是当前的School的vueComponent实列对象，因为在main.js里面创建Vue实列对象的时候绑定了一个$bus，所以这个vueComponent的实列对象也可以拿到$bus
            // $on表示给对象绑定一个事件，第一个参数是事件名称，第二个参数就是该事件被触发后的回调函数
            this.$bus.$on('send', function(data){
                console.log('School接收到数据：', data);
            })
        },
        // 当当前VueComponent实列对象被销毁前，应当把绑定在$bus上面的事件关闭，这样$bus上面的其他VueComponent实列对象就可以绑定相同的事件了，这样就不会占着茅坑不拉屎
        beforeDestroy() {
            // 为什么要销毁：：因为当前的VueComponent实列对象被销毁时，其他的实列对象还要使用$bus全局消息总线，当前VueComponent实列对象被销毁了，不要影响其他VueComponent实列对象使用$bus来传递消息
            // 同时关闭多个绑定在$bus上的事件
            this.$bus.off(['send', 'event2', ])
        },
    }
</script>

<style scoped>
    .myDiv{
        background-color: aquamarine;
    }
</style>