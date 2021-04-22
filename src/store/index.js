import { createStore } from 'vuex'

const store=createStore({
    state(){
        return{
            id:'',
            type:''
        }
    },
    getters:{
        id(state){
            return state.id
        },
        type(state){
            return state.type
        }
    },
    mutations:{
        changeid(state,{id}){
            state.id=id
        },
        changetype(state,{type}){
            state.type=type
        }
    },
    actions:{
        changeId({commit},id){
            commit('changeid',{id})
        },
        changeType({commit},type){
            commit('changetype',{type})
        }
    }
})  
export default store