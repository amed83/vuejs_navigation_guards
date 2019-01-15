import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
     plugins: [createPersistedState()],
    state:{
        usersDb:[
            {username:'seller',password:'seller'},
            {username:'admin',password:'admin'}
        ],
        loggedAs:''
    },
    getters:{
        userJustLogged:state=>{
            return state.loggedAs
        }
    },
    mutations:{
        LOGIN_USER:(state,payload)=>{
            const user = payload.username
            let checkUser= state.usersDb.find(username=>{
                return username.username===user
            })
            if(checkUser){
                return state.loggedAs=checkUser.username
            }
        },
        LOGOUT_USER:(state)=>{
            state.loggedAs=''
        }
    },
    actions:{
        loginUser:(context,response)=>{
            context.commit('LOGIN_USER',response)
        }
    }
})