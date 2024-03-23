
<template>
    <div >
        <!-- <h3 >当前求和为：{{ sum }}</h3> -->
        <!-- 展示vuex里面管理的数据 -->
        <h3 >vuex当前求和为：{{ $store.state.sum }}</h3>
        <h3 >vuex其他映射数据 11 {{ $store.state.name }} -- {{ $store.state.age }}</h3>
        <h3 >vuex其他映射数据 22 {{ mingzi }} -- {{ nianling }}</h3>
        <h3 >vuex其他映射数据 33 {{ name }} -- {{ age }}</h3>
        <h3 >vuex当前求和为bigSUm 111：{{ $store.getters.bigSum }}</h3>
        <h3 >vuex当前求和为bigSUm 222：{{ daHe }}</h3>
        <h3 >vuex当前求和为bigSUm 333：{{ yigeshu }}</h3>
        <h3 >vuex当前求和为bigSUm 444：{{ bigSum }}</h3>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addOdd">当前求和为奇数才能加</button>
        <button @click="addWait">等一等再加</button>
        
        <br />
        <button @click="add2(n)">++</button>
        <button @click="SUB2(n)">--</button>
        <button @click="addOdd2">2 当前求和为奇数才能加</button>
        <button @click="addWait2(n)">2 等一等再加</button>

    </div>
</template>

<script>

    // https://blog.csdn.net/ALakers/article/details/108568999
    // 通过vuex里面的mapState来映射属性
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'

    // 从vuex的state中映射数据使用{mapState}，注意{}不能省略
    // 从vuex的getters中映射数据使用{mapGetters}，注意{}不能省略


    // 使用{mapActions} 将vuex里面Actions对应的方法映射过来，使用方法和效果和{mapState}、{mapGetters}一样
    // 使用{mapMutations} 将vuex里面Mutations对应的方法映射过来
    import {mapActions} from 'vuex'
    import {mapMutations} from 'vuex'


    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
                // sum: 0
            }
        },
        computed: {
            // 以下是vuex的state里面的数据
            // ...是es6写法，表示将一个对象{}里面的属性全部展开合并到外面的对象上面，由于mapState的返回值是一个对象{}，所以使用...来展开里面的所有key-value
            // {mingzi: 'name', nianling: 'age'}里面配置的表示：mingzi表示在本组件里面使用的变量，'name'表示将vuex里面store存储的name变量映射到名字这个变量上
            // 以后在本组件里面要使用store里面的name变量，就可以直接使用名字变量了
            // 对象写法
            ...mapState({mingzi: 'name', nianling: 'age'}),
            // 数组写法
            ...mapState(['name', 'age']),

            // 以下是vuex的getters里面的数据
            daHe(){
               return this.$store.getters.bigSum
            },
            ...mapGetters({yigeshu:'bigSum'}),
            ...mapGetters(['bigSum'])
        },
        methods: {
            add(){
                // this.sum += this.n
                
                // console.log('this.$store', this.$store);

                // 使用vuex来保存组件间的共享数据
                // dispatch第一个参数是在store.actions上面配置的回调，第二个参数是数据（如果有多个参数使用对象包裹）
                this.$store.dispatch('add', this.n)

            },
            sub(){
                // this.sum -= this.n
                // this.$store.dispatch('sub', this.n)

                // 如果在action里面没有业务逻辑，而是对数据的直接修改，那么可以使用$store.commit方法来直接操作mutations里面的方法
                this.$store.commit('SUB', this.n)


            },
            addOdd(){
                // if (this.sum % 2){
                //     this.sum += this.n
                // }

                // 控制奇数逻辑写在这里
                // if (this.$store.state.sum % 2){
                //     this.$store.dispatch('add', this.n)
                // }
                // 控制奇数逻辑写vuex里
                this.$store.dispatch('addOdd', this.n)
            },
            addWait(){
                // setTimeout(() => {
                //     this.sum += this.n
                // }, 1000);

                this.$store.dispatch('addWait', this.n)
            },
            
            // 映射actions里面的方法
            // 映射出来的方法会默认把event参数传递给vuex，所以在使用的时候要指定参数
            // 同样有数组的写法，
            ...mapActions({'add2': 'add','addOdd2': 'addOdd','addWait2': 'addWait'}),

            ...mapMutations({'SUB2': 'SUB'})
        },
    }
</script>


<style scoped>


</style>