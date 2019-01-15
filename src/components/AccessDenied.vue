<template lang="html">
    <div class="main_container">
        <h3>Hey Boy, you don't have permission to access here</h3>
        <button class="btn btn-primary" @click="backToHome">Back</button>
        <img id="img" src="../assets/denied.jpg" alt="permissionDenied">
    
    </div>
</template>

<script>

export default {
    methods:{
        backToHome(){
            this.$router.push('homepage')
        }
    }
}
</script>

<style scoped>
    .btn{
        width:14rem;
    }
    #img{
        width:650px;
    }
    .main_container{
    
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items:center;
    }
</style>
