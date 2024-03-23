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


import {nanoid} from 'nanoid'

// actions和mutations里面的方法要一对一对的写
// 准备Actions，用于响应组件的操作
const actions = {
    
    addPerson(context){
        var person = {'id': nanoid(), 'name': nanoid()}

        context.commit('ADD_PERSON', person)
    }
    
}
// 准备Mutations，用于操作数据state
const mutations = {
    ADD_NUM(state, value){
        state.num += value
    },
    ADD_PERSON(state, value){
        state.personList.push(value)
    },
}
// 准备state，储存数据
const state = {
    num: 0,
    // 用于保存人员列表
    personList: [
        {id: '001', name: '张三'}
    ]
}
// 准备getters，用于将state中的数据进行加工处理，类似于vue中的计算属性
const getters = {
    sum(state){
        return state.personList.length
    }
}

// 创建vuex实列
const store = new Vuex.Store({
    // 导入上面创建的vuex配置
    actions: actions,
    mutations: mutations,
    // 当配置与变量重名时，可以直接使用，会转变为state: state
    state,
    getters
})

// 向外暴露store
export default store