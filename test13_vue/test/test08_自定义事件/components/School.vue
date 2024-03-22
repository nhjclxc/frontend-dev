
<template>
    <div class="myDiv">
        <div > 名称 {{ name }}</div>
        <div>地址 {{ addr }}</div>
        <button @click="sendSchoolName">把学校名称称给父组件</button>
    </div>
</template>

<script>

    export default {
        name: 'School',
        props: ['getSchoolName'],
        data() {
            return {
                name: '尚硅谷,尚硅谷,尚硅谷,尚硅谷 ',
                addr: '北京昌平'
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .myDiv{
        background-color: aquamarine;
    }
</style>