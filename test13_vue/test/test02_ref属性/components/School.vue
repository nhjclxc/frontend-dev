
<template>
    <div @click="showName" id="school">
        <div>学校名称：{{ schoolName }}</div>
        <div>学校地址：{{ schoolAddr }}</div>
    </div>
</template>

<style>
    #school {
        background-color: rgb(216, 49, 180);
    }
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