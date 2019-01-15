<template lang="html">
    <div class="">
        <h3>AdminView</h3>
        <button  class="btn btn-primary" @click="backToHome">Back to home</button>
    </div>
</template>

<script>
export default {
    methods:{
        backToHome(){
            this.$router.push('Homepage')
        }
    }
}
</script>

<style lang="css">
</style>
