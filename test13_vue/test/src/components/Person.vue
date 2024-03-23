<template>
    <div>
       <h2>人员列表</h2>
       <h2>计数组件计数值为： {{ num }}</h2>
       <button @click="addPerson">随机添加一个人</button>
       <ul>
        <li v-for="per in personList" :key="per.id">
            {{ per.name }}
        </li>
       </ul>
    </div>
</template>

<script scoped>
 

    // import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


    export default {
       name: 'Person',
       data() {
          return {
          }
       },
       computed: {
            // ...mapState('countModule', ['num']),
            // ...mapState('personModule', ['personList']),
            num(){

                // https://vuex.vuejs.org/zh/guide/modules.html

                // 如果是使用$store来获取state或action的话，必须要在后面加上对应的模块名
                return this.$store.state.countModule.num
            },
            personList(){
                return this.$store.state.personModule.personList
            }
       },
       methods: {

        // ...mapActions('personModule', ['addPerson']),
        addPerson(){
          
            // https://vuex.vuejs.org/zh/guide/modules.html#%E5%9C%A8%E5%B8%A6%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E7%9A%84%E6%A8%A1%E5%9D%97%E5%86%85%E8%AE%BF%E9%97%AE%E5%85%A8%E5%B1%80%E5%86%85%E5%AE%B9%EF%BC%88global-assets%EF%BC%89

            // 使用$store里面的dispatch或commit的时候，在对应的action或mutation前面加上对应的模块/
            // 相当于是去那个路径下找
            this.$store.dispatch('personModule/addPerson')
        }
       },
}
</script>