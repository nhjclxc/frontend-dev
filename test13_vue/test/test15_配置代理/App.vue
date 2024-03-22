<template>
    <div class="myDiv"> 

        <button @click="getStudent">获取学生数据</button>

        <hr>
        <hr>

        <button @click="getCar">获取汽车数据</button>
    </div>
</template>

<script>
 
 //安装axios npm i axios

    // 使用axios
    import axios from 'axios'

    // 在vue.config.js里面配置
    //vue-cli配置代理：https://cli.vuejs.org/zh/config/#devserver-proxy


    export default {
        name: 'App',
        methods: {
            getStudent(){
                // console.log('axios', axios);
                axios({
                    method: 'get',
                    // 没有代理的时候写的是5000，但是现在有代理了，直接写8080
                    // url: 'http://127.0.0.1:5000/students'
                    url: 'http://127.0.0.1:8080/studentServer/students'
                }).then(function (response) {
                    console.log(response);
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log('error', error);
                }).finally(response => {
                    console.log('finally', response)
                });
            },
            getCar(){
                console.log('getCar');
                
                axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8080/carServer/cars'
                }).then(function (response) {
                    console.log(response);
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log('error', error);
                }).finally(response => {
                    console.log('finally', response)
                });
            }
        },
    }
</script>