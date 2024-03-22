
<template>
    <li>
        <label>
            <!-- 复选框有一个属性checked表示这个复选框是否被选中，这个时候可以通过vue来控制 -->
            <input type="checkbox" v-bind:checked="item.done" @click="changeDone($event, item.id)"/>
            <!-- 使用v-model来双向绑定数据 -->
            <!-- <input type="checkbox" v-model="item.done"/> -->
            <span v-show="!item.isEdit">{{item.title}}</span>
            <input v-show="item.isEdit" type="text" @blur="blurHandler(item, $event)" ref="inputText"/>
        </label>
        <button class="btn btn-danger" @click="deleteIxtemInner(item.id)">删除</button>
        <button class="btn btn-edit" v-show="!item.isEdit" @click="editTitle(item)">编辑</button>
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
            },
            editTitle(item){
                

                // console.log('saa');
                // 判断item是否有一个 isEdit 的属性
                if (Object.hasOwnProperty('isEdit')) {
                    // 有就直接修改
                    item.isEdit = true
                }else{
                    // 没有就使用Vue.$set新增一个isEdit属性
                    this.$set(item, 'isEdit', true)
                    // 以下方法可以添加，都是vue监测不到数据的变化，页面无法改变效果
                    // item.isEdit = true
                } 

                // item.isEdit = true表示处于修改状态，要出现一个输入框，同时span要隐藏


                // 使得输入框获取焦点
                this.$refs.inputText.value = item.title

                // this.$refs.inputText.focus();  // 这样没效果，原因是这里修改了inputText的获取焦点，都是vue还没有修改dom原生，当vue修改dom元素的时候又失去了焦点

                // nextTick指定的回调函数会在dom节点更新之后进行回调
                this.$nextTick(function(){
                    this.$refs.inputText.focus();
                })
                

            },
            blurHandler(item, $event){
                // console.log('ss');
                // 失去焦点事件，将item.isEdit = false
                item.isEdit = false
                // 同时获取文本框里面的数据，并且修改
                // console.log('', $event.target.value);
                
                // 如果输入框内容为空，则不修改，退出
                if ( !$event.target.value)
                    return

                // 使用消息总线来向App发布消息
                this.$bus.$emit('editTitle', item.id, $event.target.value)


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