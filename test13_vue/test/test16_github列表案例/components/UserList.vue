
<template>
    <!-- <div class="userListDiv">
        <User v-for="user in userData" :key="user.id" :card="user"/>
    </div> -->
    
    <div class="row">
        <User v-for="user in userData" :key="user.id" :card="user"/>
    </div>
</template>

<script>


    import User from './User.vue'

    export default {
        name: 'UserList',
        components: {User},
        data() {
            return {
                userData: []
            }
        },
        methods: {
            show(data){
                this.userData = data
            }  
        },
        mounted() {
            // 绑定获取输入框数据的事件
            this.$bus.$on('getUserList', this.show)
        },
        beforeDestroy(){
            // 解绑事件
            this.$bus.$off('getUserList')
        }
    }
</script>


<style scoped>
    .userListDiv {
        background-color: rgb(223, 255, 127);

        /* 使子元素横向展开 */
        display: flex;
    }
</style>