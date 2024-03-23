// 创建计数模块的配置Vuex.Store
export default {
    // 开启模块配置的命名空间
    //namespaced: true,必须添加，如果不加，那么mapState, mapGetters, mapActions, mapMutations无法匹配
    namespaced: true,
    actions: {},
    mutations: {
        ADD_NUM(state, value){
            state.num += value
        },
    },
    state: {
        num: 0,
    },
    getters: {},
}

/*
const countModule = {
    // 开启模块配置的命名空间
    //namespaced: true,必须添加，如果不加，那么mapState, mapGetters, mapActions, mapMutations无法匹配
    namespaced: true,
    actions: {},
    mutations: {
        ADD_NUM(state, value){
            state.num += value
        },
    },
    state: {
        num: 0,
    },
    getters: {},
}

export default countModule
 */