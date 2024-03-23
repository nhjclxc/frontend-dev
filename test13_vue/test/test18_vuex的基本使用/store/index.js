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

// actions和mutations里面的方法要一对一对的写
// 准备Actions，用于响应组件的操作
const actions = {
    /**
     * vuex里面action的add回调函数
     * @param {*} context 这是一个小型的vuex实列对象，里面包含了在action阶段可能用到的方法
     * @param {*} value 调用store.dispatch时传递的参数
     */
    'add': function(context, value) {
        // console.log('actions.add, ', context, value);
        // 外部调用了store.dispatch，在actions里面就要调用motations去维护数据
        context.commit('ADD', value)
    },
    //简写形式  ，在actions里面没有业务逻辑的，可以直接使用$store.commit去操作mutations里面的方法
    // sub(context, value){
    //     context.commit('SUB', value)
    // }, 
    // 注意在actions里面写业务，在mutations里面只做对应数据的修改
    // actions相当于Service层，mutations相当于Dao层
    addOdd(context, value){
        if (context.state.sum % 2){
            context.commit('ADD', value)
        }
        // context.commit('ADD_ODD', value)
    }, 
    addWait(context, value){
        setTimeout(() => {
            context.commit('ADD', value)
        }, 1000);
        // context.commit('ADD_WAIT', value)
    }
}
// 准备Mutations，用于操作数据state
const mutations = {
    /**
     * 定义一个与actions里面add对应的回调，在actions里面方法名写小写，在mutations里面方法名写大写
     * @param {*} state vuex里面所有管理的数据state
     * @param {*} value 从actions传过来的数据
     */
    'ADD': function(state, value) {
        // console.log('motations.ADD, ', state, value);
        // 维护数据
        state.sum += value
        // console.log('state.sum ', state.sum );
    },
    //简写形式
    SUB(state, value){
        state.sum -= value
    },
    // ADD_ODD(state, value){
    //     if (state.sum % 2){
    //         state.sum += value
    //     }
    // },
    // ADD_WAIT(state, value){
    //     setTimeout(() => {
    //         state.sum += value
    //     }, 1000);
    // },
}
// 准备state，储存数据
const state = {
    sum: 0,
    name: 'zhangsan ',
    age: 18
}
// 准备getters，用于将state中的数据进行加工处理，类似于vue中的计算属性
const getters = {
    /**
     * 对state中的sum数据进行加工处理
     * @param {*} state vuex里面的state数据
     */
    bigSum(state){
        return state.sum * 11
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