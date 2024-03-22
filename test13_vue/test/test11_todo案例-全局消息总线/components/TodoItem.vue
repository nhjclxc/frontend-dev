
<template>
    <li>
        <label>
            <!-- 复选框有一个属性checked表示这个复选框是否被选中，这个时候可以通过vue来控制 -->
            <input type="checkbox" v-bind:checked="item.done" @click="changeDone($event, item.id)"/>
            <!-- 使用v-model来双向绑定数据 -->
            <!-- <input type="checkbox" v-model="item.done"/> -->
            <span>{{item.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteIxtemInner(item.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name: 'TodoItem',
        data() {
            return { 
            }
        },
        methods: {
            changeDone($e, id){
                // console.log($e);
                // console.log(id);
                // console.log('saa', this.item.id);
                // console.log('saa', this.item.id, id);
                // console.log('saa', e.target);
                // console.log('saa', e.target.checked);
                // this.updateDone(this.item.id, $e.target.checked)

                
                // 3、触发在全局消息事件总线上面绑定的事件

                // 适应全局事件解决祖先之间的数据传递
                // this.updateDone(id, $e.target.checked)
                this.$bus.$emit('updateDone', id, $e.target.checked)

            },
            deleteIxtemInner(id){

                // 3、触发在全局消息事件总线上面绑定的事件
                
                // 适应全局事件解决祖先之间的数据传递
                // this.deleteItem(id)
                this.$bus.$emit('deleteItem', id)
            }
        },
        
        // updateDone和deleteItem适应全局消息事件总线来解决
        // props: {
        //     item: {
        //         type: Object,
        //         required: true
        //     },
        //     updateDone: { },
        //     deleteItem: { },
        // },
        props: {
            item: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style lang="css" scoped>

    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }
    /* 鼠标悬浮整个li高亮 */
    li:hover{
        background-color: #cbd7ec;
    }
    /* 鼠标悬浮li出现删除按钮 */
    li:hover button{
        display: block;
    }
</style>