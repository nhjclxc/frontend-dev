<template>
    <div>
        <!-- ref指令用来给html标签加上一个vue的绑定关系 -->
        <!-- ref属性被用来给元素或子组件注册引用信息（id的替代者） -->
        <h1 ref="title">你好vue框架</h1>
        <button ref="btn" @click="showInfo">点我输出h1的内容</button>
        
        <School ref="sch" id="sss"></School>
    </div>
</template>

<script>

    import School from './components/School.vue'

    export default {
        name: 'App',
        components: { School },
        methods: {
            showInfo(){
                // 使用this.$refs就可以获取加了ref属性的标签
                console.log(this.$refs);
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
                console.log(document.getElementById('sss'));
            }
        },
    }
</script>