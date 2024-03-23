/** 
 * 解释 sotre/index.js
 *  只要写了sotre文件夹里面配置的就默认是vuex的内容
 *  index.js理由，当外部导入某一个模块的时候，如果只给到模块的文件夹，没有给到具体的.js文件，那么引入的时候就会默认去找index.js文件来作为导入对象
 */

// 1、引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 在Vue上应用Vuex插件
Vue.use(Vuex)

import countModule from './countModule.js'
import personModule from './personModule.js'

// // 创建计数模块的配置Vuex.Store
// const countModule = {
//     // 开启模块配置的命名空间
//     //namespaced: true,必须添加，如果不加，那么mapState, mapGetters, mapActions, mapMutations无法匹配
//     namespaced: true,
//     actions: {},
//     mutations: {
//         ADD_NUM(state, value){
//             state.num += value
//         },
//     },
//     state: {
//         num: 0,
//     },
//     getters: {},
// }

// 创建人员模块的配置Vuex.Store
// const personModule = {
//     namespaced: true,
//     actions: {
//         addPerson(context){
//             var person = {'id': nanoid(), 'name': nanoid()}

//             context.commit('ADD_PERSON', person)
//         }
//     },
//     mutations: {
//         ADD_PERSON(state, value){
//             state.personList.push(value)
//         },
//     },
//     state: {
//         personList: [
//             {id: '001', name: '张三'}
//         ]
//     },
//     getters: {
//         sum(state){
//             return state.personList.length
//         }
//     },
// }


// 创建vuex实列

const store = new Vuex.Store({

    // 使用模块化vuex的时候，这里必须使用modules来导入多个模块
    modules: {
        countModule,
        'personModule': personModule
    }
})

// 向外暴露store
export default store