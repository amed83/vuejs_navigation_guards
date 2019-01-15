<template lang="html">
    <div class="main_container">
        <h2>AUTH PROTOTYPE </h2>
        <button class="btn btn-primary logout" @click="logOut">Logout</button>
    </div>
</template>

<script>
export default {
    methods:{
        logOut(){
           this.$store.commit('LOGOUT_USER')
           this.$router.push('Login')  
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
