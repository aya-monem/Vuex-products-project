<template>
    <div v-if="cartProducts.length" class="w-50 mx-auto mt-3">
        <div class="p-3 mb-4 border border-light border-1 d-flex align-items-center"
           v-for="product in cartProducts" :key="product.id">
            <img :src="product.thumbnail" class="card-img-top object-cover pr-2" :alt="product.description">
            <div class="d-flex-column mx-4">
                <div class="">
                    <h4>{{product.title}}</h4>
                    <p>Price: ${{ product.price }}</p>
                </div>
                <i class="fa fa-trash" aria-hidden="true" @click="clickRemoveFromCart(product.id)"></i>
           </div>
        </div>
        Total: ${{ cartItemsPrice }}
    </div>
    <div v-else class="w-50 mx-auto text-center">
        <h2>Cart is empty ...</h2>
    </div>
    
        
    
</template>
<script>
import store from '../store'
import { mapActions } from 'vuex';
export default{
    name:'CartView',
    methods:{
        ...mapActions(["removeFromCart"]),
        clickRemoveFromCart (id) {
            this.removeFromCart(id)
        },
        
    },
    computed:{
        cartProducts(){
            return store.state.cart
        },
        cartItemsPrice(){
            let pricesArray = store.state.cart.map(item => item.price)
            return pricesArray.reduce((acc, price) => acc + price)
        }
    }
}
</script>
<style scoped>
.card-img-top{
    width: 100px;
    height: 100px;
}
.fa.fa-trash{
    cursor: pointer;
    color: rgb(163, 33, 33);
}
</style>