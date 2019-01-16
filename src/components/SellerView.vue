<template lang="html">
    <div >
        <h3>Seller View</h3>
        <button class="btn btn-primary" @click="backToHome">Back to home</button>
        <div class="table_container">
            <table class="table">
                <tr>
                    <th>Seller</th>
                    <th>Product</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
                <tr v-for="offer in offers">
                    <td>{{offer.seller}}</td>
                    <td>{{offer.product}}</td>
                    <td>{{offer.location}}</td>
                    <td>{{offer.price}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            offers:[
                {
                        seller: 'Shell',
                        product: 'Diesel B7',
                        location: 'Flörsheim',
                        price: 85.3,
                    },
                    {
                        seller: 'OF Seller',
                        product: 'Mogas E5',
                        location: 'Flörsheim',
                        price: 85.3,
                    },
                    {
                        seller: 'Shell',
                        product: 'Mogas E10',
                        location: 'Karlsruhe',
                        price: 85.3,
                    },
                
            ]
        }
    },
    methods:{
        backToHome(){
            this.$router.push('Homepage')
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
