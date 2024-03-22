<template>
    <div class="myDiv">
        <!-- 使用props先给子组件传递一个函数，之后子组件在调用该函数来传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <hr>
        <!-- 使用组件自定义事件来传递数据 -->
        <!-- 使用v-on:来给一个组件绑定一个组件自定义事件 -->
        <!-- 要触发整个事件就要去整个组件定义的地方触发 -->
        <!-- <Student v-on:send="getStudentName"/> -->
        <!-- <Student @:send="getStudentName"/> -->

        <!-- 使用ref来绑定一个自定义事件 -->
        <!-- 里面的sendStudentName是事件名称 -->
        <Student ref="student"/>

    </div>
</template>

<script>

    import School from './components/School.vue'
    import Student from './components/Student.vue'

    export default {
        name: 'App',
        components: { School, Student },
        methods: {
            getSchoolName(name){
                console.log('学校名称：', name);
            },

            // 组件自定义事件：事件触发在子组件，事件回调在父组件，这样可以实现子组件给父组件传递数据
            // 组件自定义事件：事件触发在子组件，事件回调在父组件，这样可以实现子组件给父组件传递数据
            // 组件自定义事件：事件触发在子组件，事件回调在父组件，这样可以实现子组件给父组件传递数据
            getStudentName(name, timer){
                console.log('学生名称：', name, timer);
            }
        },
        mounted(){
            
            // 给Student实列绑定send事件
            this.$refs.student.$on('send', this.getStudentName)


            // setTimeout(() => {
                // this.$refs.student.$on('send', this.getStudentName)
            // }, 2000)
                

            // setInterval(() => {
            //     // 挂载事件
            //     // student是ref的属性
            //     // send是子组件要绑定的事件名称，也就是this.$emit('send', this.name)里面的send
            //     // this.getStudentName是指send事件被触发后要回调的函数
            //     this.$refs.student.$on('send', this.getStudentName)
            // }, 2000);
        }
    }
</script>