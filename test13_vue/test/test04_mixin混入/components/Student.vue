
<template>
    <div @click="showInfo">
        <div >姓名：{{ name }}</div>
        <div>年龄：{{ age }}</div>
    </div>
</template>

<script>

    // // 导入混合，局部混入
    // import { mixin } from '../mixin';

    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18
            }
        },
        // 当在多个组件里面都出现同一块代码的时候，可以将这一块代码提取出去。在vue里面叫做混合mixin
        // methods: {
        //     showInfo(){
        //         console.log(this.name)
        //     }
        // }

        // 注册混合
        // mixins: [mixin]
    }
</script>