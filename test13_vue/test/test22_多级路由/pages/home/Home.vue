<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                    </li>
                    <li>
                        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                    </li>
                </ul>
                
                
            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
       name: 'Home',
       data() {
          return {
             
          }
       },
       methods: {
             
       },
    //    beforeDestroy() {
    //         console.log('Home, beforeDestroy');
    //    },
    //    mounted() {
    //     console.log('Home, mounted');
    //    },
}
</script>
