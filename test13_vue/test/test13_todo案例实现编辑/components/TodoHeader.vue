
<template>
    <div class="todo-header">
        <!-- 绑定回车事件，那么就插入当前输入框里面的内容 -->
        <!-- 使用 v-model来获取输入框的数据 -->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keydown.enter="insert" v-model="title"/>
    </div>
</template>

<script>
    // 使用一个小型生成id的库
    import {nanoid} from 'nanoid'

    export default {
        name: 'TodoHeader',
        // 使用props来接收父组件的属性或函数
        // props: ['addItem'],  // 转变为自定义事件方式
        data() {
            return { 
                title: ''
            }
        },
        methods: {
            insert(event){
                // console.log(event.target.value, 'sss', this.title);
                const item = {id: nanoid(), title: event.target.value, done: false}
                // console.log(item);
                // 这里不在是调用addItem这个函数了，而是使用组件的自定义事件的方式向父组件传递数据
                // this.addItem(item)
                // 第一个参数是事件名，后面的参数是给这个事件的回调函数传递的参数
                this.$emit('addItem', item)

                // 清空输入框
                event.target.value = ''
                // this.title = ''
            }
        }
    }
</script>


<style lang="css" scoped>

    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>