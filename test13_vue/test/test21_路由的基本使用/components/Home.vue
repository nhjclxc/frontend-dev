<template>
    <div>
        <h2>我是Home的内容</h2>
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
       beforeDestroy() {
            console.log('Home, beforeDestroy');
       },
       mounted() {
        console.log('Home, mounted');
       },
}
</script>
