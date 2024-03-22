<template>
    <div>
        <!-- :是v-bind的简写形式，会将""里面的当成表达式进行执行 -->
        <Student name="张三" :age="18" />
        <Student name="里斯" :age="28" />
        <Student name="老王" />
    </div>
</template>

<script>

    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: { Student },
    }
</script>./components/Student.vue