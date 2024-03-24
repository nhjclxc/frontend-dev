<template>
    <div class="page-header">
        <h2>Vue Router Demo</h2>
        <!-- <input type="text" @keydown.enter="login" v-model="username" ref="usernameInput"> -->
        <input type="text" @keydown.enter="login" ref="usernameInput">
        <h5>当前登录人员： {{ username }}</h5>
    </div>
</template>

<script>
    export default {
       name: 'PageHeader',
       data() {
          return {
             username: ''
          }
       },
       methods: {
            login(){
                window.username =  this.$refs.usernameInput.value
                // console.log('window.username = ', window.username);
                this.username = window.username
                this.$refs.usernameInput.value = ''
            }
       },
}
</script>
