
<template>
    <div >
        <!-- 展示vuex里面管理的数据 -->

        
        <h3 >当前所有人数为：{{ num }}</h3>
        <button @click="ADD_NUM(1)">计数加一</button>

        <h3 >当前所有人数为：{{ sum }}</h3>
        <button @click="addPerson2">随机添加一个人</button>
    </div>
</template>

<script>

    // https://blog.csdn.net/ALakers/article/details/108568999
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


    export default {
        name: 'Count',
        data() {
            return {
            }
        },
        computed: {
            // 由于在store/index.js里面加了模块命名空间，所以这里要加一个模块前缀才能匹配上
            // 第一个参数表示命名空间，第二个参数表示要映射的字段
            ...mapState('countModule', ['num']),
            ...mapState('personModule', ['personList']),

            ...mapGetters('personModule', ['sum']),
        },
        methods: {
            // 映射mapMutations
            ...mapMutations('countModule', ['ADD_NUM']),
            // 映射actions
            ...mapActions('personModule', ['addPerson']),
            addPerson2(){
                console.log('显示人员组件添加一个人');
                this.addPerson()
            }
        },
    }
</script>


<style scoped>


</style>