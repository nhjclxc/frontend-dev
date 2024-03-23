
import {nanoid} from 'nanoid'

// 创建人员模块的配置Vuex.Store
export default {
    namespaced: true,
    actions: {
        addPerson(context){
            var person = {'id': nanoid(), 'name': nanoid()}

            context.commit('ADD_PERSON', person)
        }
    },
    mutations: {
        ADD_PERSON(state, value){
            state.personList.push(value)
        },
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        sum(state){
            return state.personList.length
        }
    },
}