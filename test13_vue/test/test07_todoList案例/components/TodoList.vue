
<template>
    <ul class="todo-main">
        <TodoItem 
            v-for="(todo) in todos" 
            v-bind:key="todo.id" 
            :item="todo" 
            :updateDone="updateDone"
            :deleteItem="deleteItem"
        > </TodoItem>
    </ul>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {
        name: 'TodoList',
        components: {TodoItem},
        props: ['todos', 'updateDone', 'deleteItem']
    }
</script>

<style lang="css" scoped>

    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>