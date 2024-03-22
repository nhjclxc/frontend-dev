
<template>
    <div>
        <button @click="isShow = !isShow">点击切换</button>
        <h2 class="box" v-show="isShow">{{ name }}</h2>
    </div>
</template>

<script>

    export default {
        name: 'Test',
        data() {
            return {
                name: 'hello',
                isShow: true
            }
        },
    }
</script>


<style scoped>
    .box{
        height: 50px;
        background-color: rgb(223, 255, 127);
    }
</style>