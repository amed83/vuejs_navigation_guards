<template lang="html">
    <div class="main_container">
        <h2>AUTH PROTOTYPE </h2>
        <button class="btn btn-primary logout" @click="logOut" v-if="userLogged">Logout</button>
    </div>
</template>

<script>
export default {
    methods:{
        logOut(){
            this.$store.dispatch('logoutUser')
            this.$router.push('login')  
            this.$cookies.remove('user')
        }
    },
    computed:{
        userLogged(){
            return this.$store.getters.userJustLogged
        }
    }
}
</script>

<style scoped>
    .main_container{
        background-color: #18E084;
        min-height: 80;
        margin-bottom:25px;
        position:relative;
    }
    .main_container h2{
        color:rgb(244, 238, 235);
        padding:15px;
    }
    .logout{
        position:absolute;
        top:1rem;
        left:60rem;
    }
</style>
