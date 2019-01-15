<template lang="html">
    <div class="">
        <h3>Please Login</h3>
        <form class="login" >
            <input type="text" placeholder="enter your username" class="input_fields" v-model="user.username">
            <input type="password" placeholder="enter your password" class="input_fields"v-model="user.pswd">
            <button class="btn btn-primary" @click="login" >Login</button>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data:function(){
        return{
            user:{username:'',pswd:''}
        }
    },
    methods:{
        login(e){
            e.preventDefault()
            const user = this.user
            this.$store.dispatch('loginUser',user)
        }
    },
    computed:{
        ...mapState(['loggedAs']),
        redirectIfLogged(){
        
            if(this.loggedAs){
                this.$router.push({name:'Homepage'})
            }
        }
    },
    watch:{
        redirectIfLogged(){}
    }
}
</script>

<style scoped>
    .login{
    
        display: flex;
        flex-direction: column;
        align-items:center;
        padding:30px;
    }
    .input_fields{
        width:12rem;
        margin-bottom:10px;
    }
    .btn{
        width :12rem;
    }
</style>
