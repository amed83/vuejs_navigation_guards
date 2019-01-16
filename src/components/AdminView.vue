<template lang="html">
    <div class="">
        <h3>AdminView</h3>
        <button  class="btn btn-primary" @click="backToHome">Back to home</button>
        <div class="table_container">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                <tr v-for="user in users">
                    <td>{{user.id}}</td>
                    <td>{{user.firstname}}</td>
                    <td>{{user.lastname}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            users:[
                {
                    id:'12412',
                    firstname:'Max',
                    lastname:'One',
                    email:'max@one.uk',
                },
                {
                    id:'3526',
                    firstname:'John',
                    lastname:'Two',
                    email:'john@one.uk'
                },
                {
                    id:'7432',
                    firstname:'Frank',
                    lastname:'Maybe',
                    email:'frank@one.uk'
                },
                {
                    id:'9963',
                    firstname:'Jessica',
                    lastname:'Always',
                    email:'jessica@one.uk'
                }
            ]
        }
    },
    methods:{
        backToHome(){
            this.$router.push('homepage')
        }
    }
}
</script>

<style scoped>
    .table_container {
        width:55%;
        margin:auto;
    }
    .btn{
        margin-bottom: 40px;
    }
    .table{
        border:solid #18E084 2px;
    }
</style>
