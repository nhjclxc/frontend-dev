
<template>
    <div class="myDiv">
        <div >姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
    </div>
</template>

<script>

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
    }
</script>


<style scoped>
    .myDiv{
        background-color: rgb(223, 255, 127);
    }
</style>