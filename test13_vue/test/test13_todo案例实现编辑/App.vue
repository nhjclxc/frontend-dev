<template> 

    <div id="root">

      <!-- 将原来子组件给父组件传递数据的方式有props变化为组件自定义事件的方法 -->

        <div class="todo-container">
            <div class="todo-wrap">
              <!-- @addItem表示给子组件TodoHeader添加一个addItem的事件 -->
              <!-- addItem表示的是这个子组件的@addItem事件在父组件的回调函数 -->
                <TodoHeader @addItem="addItem"/>
                <!-- <TodoHeader :addItem="addItem"/> -->

                <!-- <TodoList :todos="todos" :updateDone="updateDone" :deleteItem="deleteItem"/> -->
                <!-- updateDone和deleteItem适应全局消息事件总线来解决，那么原来传递到TodoList的相应方法也要删除 -->
                <TodoList :todos="todos" />

                <!-- <TodoFooter :donedItem="donedItem" :allItem="allItem" :computeAllChecked="computeAllChecked" :updateAllDone="updateAllDone"/> -->
                <TodoFooter :donedItem="donedItem" :allItem="allItem" :computeAllChecked="computeAllChecked" @updateAllDone="updateAllDone"/>
            </div>
        </div>
    </div>  

</template>

<script>

    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        name: 'App',
        components: { TodoHeader, TodoList, TodoFooter},
        data() {
          // 下面是将todos存在内存里面
            // var todos = [
            //     {id: '001', title: '吃饭', done: true},
            //     {id: '002', title: '睡觉', done: false},
            //     {id: '003', title: '抽烟', done: true},
            //     {id: '004', title: '开车', done: false},
            //     {id: '005', title: '打飞机', done: true},
            // ]
            // return {
            //     todos
            // }

            // 下面将todos存在localStorage里面，初始时从里面读取
            var todos = localStorage.getItem('todos')
            return {
              todos: todos === null ? [] : JSON.parse(todos)
            }
        },
        // 监视todos只要todos已修改，那么立刻在浏览器里面进行修改
        watch: {
          // watch监视函数会接收两个参数，第一个是修改后最新的值，第二个是原始的值，如果只要最新的就直接接收一个即可
          // 注意这里要用深度监视 deep: true
          todos: {
            deep: true,
            handler(value){
              // console.log('value ', value);
              localStorage.setItem('todos', JSON.stringify(value))
            }
          }

          // 以下是浅层监视
          // todos(value){
          //   console.log('value ', value);
          //   localStorage.setItem('todos', JSON.stringify(value))
          // }
        },
        methods: {
          // recevie相当于是一个钩子方法
          addItem(item){
            // console.log('App接收到数据：', item);
            this.todos.unshift(item)
          },
          updateDone(id, done){
            // console.log('App里面的updateDone被执行', id, done);
            // forEach会修改原数据
            // var i = 0
            this.todos.forEach(todo => {
              // console.log(' ', todo);
              if (todo.id === id){
                todo.done = done
                // return ;
              }
              // i++
            })

            // console.log('i = ', i);
          },
          deleteItem(id){
            // console.log('this.todos.', id);
            this.todos =  this.todos.filter(function(item) {
              return item.id !== id
            });
          },
          updateAllDone(done){
            // console.log('done ', done);
            this.todos.forEach(todo => todo.done = done)
          },
          editItemTitle(id, title){
            this.todos.filter(function(item) {
              if(item.id === id )
                item.title = title
            });
          }
        },
        // 使用属性计算来完成页脚的数据统计
        computed:{
          donedItem(){
            // 使用过滤的方法
              // return this.todos.filter(item => item.done).length

              // 使用reduce统计的方法
              return this.todos.reduce((preVal, currObj) => {
                return preVal + (currObj.done ? 1 : 0)
              }, 0)
          },
          allItem(){
              return this.todos.length
          },
          computeAllChecked(){
            // console.log('this.donedItem ',this.donedItem);
            // console.log('this.allItem ',this.allItem);
            // console.log('this.donedItem === this.allItem ', this.donedItem === this.allItem);
              return this.donedItem === this.allItem
          }
        },
        mounted() {
          // 2、在全局消息事件总线上面绑定事件

          // updateDone和deleteItem适应全局消息事件总线来解决
          /*注意如果$on里面的回调函数要用到VueComponent实列对象的this指针，那么$on的回调函数必须写成 箭头函数=>，
          写成箭头函数后这个this才是VueComponent实列对象的this指针，否则如果写成function(){}的形式的话是Vue（也就是vm）实列对象，这样就拿不到当前VueComponent实列对象的属性和方法了*/
          this.$bus.$on('updateDone', (id, done) => {
              // console.log('this ', this);
              // console.log('  ', id, done);
              // 懒得重新写方法了，直接适应原来编写的方法
              this.updateDone(id, done)
          })
          // this.$bus.$on('updateDone', this.updateDone)

          // 里面要用this指针，那么就写成箭头函数
          this.$bus.$on('deleteItem', (id) => {
            this.todos =  this.todos.filter(function(item) {
              return item.id !== id
            });
          })

          // 订阅标题被修改的消息
          this.$bus.$on('editTitle', this.editItemTitle)


        },
        beforeDestroy() {
          // 4、在绑定了全局消息事件总线的VueComponent实列对象销毁前，解绑全局消失事件总线上面绑定的事件
          this.$bus.$off(['updateDone', 'deleteItem']) // 写数组[]方便多个同时解绑
        },
    }
</script>

<style>

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: #84a1ec;
  border: 1px solid #e2e43f;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}




</style>