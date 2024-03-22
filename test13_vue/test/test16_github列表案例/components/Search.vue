
<template>
    <!-- <div class="myDiv">
        <h2>Search Github Users</h2>
        <input type="text" ref="inputBox" value="nhjclxc" @keydown.enter="search">
        <button @click="search"> Search </button>
    </div> -->
    
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keywords" @keydown.enter="search"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'Search',
        data() {
            return {
                keywords: 'nhjclxc'
            }
        },
        methods: {
            // async search(){
            search(){
                // 获取输入数据
                // console.log('this.keywords', this.keywords);

                var userData = []

                // console.log('userName: ', userName);
                // 向github发送axios请求
                // https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users
                // 这里使用的接口API：https://api.github.com/search/users?q=Q，这里的Q就是输入框获取的数据
                // await axios({
                axios({
                    method: 'get',
                    url: 'https://api.github.com/search/users',
                    params:{
                        q: this.keywords,
                        page: 1
                    }
                }).then(response => {
                    // console.log('response ', response);
                    // console.log('response.data ', response.data);
                    // console.log('response.data.items ', response.data.items);
                    // console.log('response.data.items typeof', typeof response.data.items);
                    // console.log('this.userData', this.userData);
                    userData = response.data.items
                    // console.log('this.userData.length', userData.length);
                    // console.log('this.userData', this.userData);
                    // this.userData.forEach(element => {
                    //     console.log('element ', element);
                    // });

                    
                    this.$bus.$emit('getUserList', userData)   
                })


                // console.log('userData', userData);

                // 下面是加了async和await的写法，如果不加，那么直接在返回的地方触发事件即可

                // 将输入框的数据发送给UserList.vue
                // 触发UserList里面的 getUserList 事件
                // this.$bus.$emit('getUserList', userData)   


            }
        },
    }
</script>

<style scoped>
    .myDiv{
        background-color: aquamarine;
    }
</style>