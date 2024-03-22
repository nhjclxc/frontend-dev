
<template>
    <div class="myDiv">
        <div > 名称 {{ name | mySlice }}</div>
        <div>地址 {{ addr }}</div>
    </div>
</template>

<script>

    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷,尚硅谷,尚硅谷,尚硅谷 ',
                addr: '北京昌平'
            }
        },
    }
</script>

<style scoped>
    .myDiv{
        background-color: aquamarine;
    }
</style>