
<template>
    <div class="todo-footer">
        <label>
        <input type="checkbox" :checked="computeAllChecked" @click="change"/>
        </label>
        <span>
        <span>已完成 {{ donedItem }}</span> / 全部 {{ allItem }}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script scoped>
    export default {
        name: 'TodoFooter',
        data() {
            return { 
            }
        },
        methods: {
            change(e){
                this.updateAllDone(e.target.checked)
            }
        },
        props: ['donedItem', 'allItem', 'computeAllChecked', 'updateAllDone']
    }
</script>

<style lang="css" scoped>

    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>