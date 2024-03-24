<template>
    <div>
        {{ $route.query.msg }}
    </div>
</template>

<script>
    export default {
       name: 'MessageDetail',
       data() {
          return {
          }
       },
       mounted() {
        // console.log('this.$route', this.$route);
       },
}
</script>
