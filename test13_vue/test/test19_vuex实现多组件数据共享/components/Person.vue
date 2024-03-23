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
 

    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


    export default {
       name: 'Person',
       data() {
          return {
          }
       },
       computed: {
            ...mapState(['personList', 'num'])
       },
       methods: {

        // 映射actions
        ...mapActions(['addPerson']),

       },
}
</script>