
<template>
    <div @click="showName">
        <div>学校名称：{{ schoolName }}</div>
        <div>学校地址：{{ schoolAddr }}</div>
    </div>
</template>

<style>
    /* div {
        background-color: rgb(49, 88, 216);
    } */
</style>

<script>
    export default {
        name: 'School',
        data() {
            return {
                schoolName: '尚硅谷',
                schoolAddr: '北京昌平'
            }
        },
        methods: {
            showName(){
                console.log('尚硅谷北京昌平学校');
            }
        },
    }
</script>