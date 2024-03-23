
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
            ...mapState(['num', 'personList']),
            ...mapGetters(['sum']),
        },
        methods: {
            // 映射mapMutations
            ...mapMutations(['ADD_NUM']),
            // 映射actions
            ...mapActions(['addPerson']),
            addPerson2(){
                console.log('显示人员组件添加一个人');
                this.addPerson()
            }
        },
    }
</script>


<style scoped>


</style>