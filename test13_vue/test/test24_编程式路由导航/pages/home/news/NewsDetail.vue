<template>
    <span>
        {{ $route.params.id }}  --  {{ $route.params.title }} 
    </span>
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
