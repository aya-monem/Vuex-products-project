<template>
    <div class="header py-2 my-2 d-flex justify-content-around align-items-center">
        <router-link to="/">Home</router-link>
        <h1>Shop online</h1>
        <div v-if="lengthItemsInCart">
            <router-link to="/cart" >
                <i class="fa fa-shopping-cart fa-xl greenCart" aria-hidden="true"></i>
            </router-link>
            <span class="items-number greenCart">{{ lengthItemsInCart }} items</span>
        </div>
        <router-link to="/cart" v-else>
            <i class="fa fa-shopping-cart fa-xl emptyCart" aria-hidden="true"></i>

        </router-link>
        
    </div>
</template>
<script>
import store from '../store'
export default{
    name:'Header',
    computed:{
        lengthItemsInCart(){
            return store.state.cart.length
        }
    }
}
</script>
<style scoped>
.header{
    border-bottom: 2px solid lightgrey;
}
.fa.fa-shopping-cart{
    cursor: pointer;
}
.greenCart{
    color: lightseagreen;
}
.emptyCart{
    color: red;
}
</style>