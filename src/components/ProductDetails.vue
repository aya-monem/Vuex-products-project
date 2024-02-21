<template>
    <div class="w-75 mx-auto mt-5 px-3 product-container d-flex justify-content-start align-items-center">
        <img :src="selectedProduct.thumbnail" class="card-img-top object-cover pr-4" :alt="selectedProduct.description" />
        <div class="mx-4">
            <h2>{{selectedProduct.title}}</h2>
            <p>Price: ${{ selectedProduct.price }}</p>
            <p>Category: {{ selectedProduct.category }}</p>
            <p>{{ selectedProduct.description }}</p>
            <button @click="clickAddToCart" class="btn btn-success btn-sm">Add to cart</button>
        </div>
    </div>
</template>
<script>
 import { mapActions } from 'vuex';
 import router from '../router'
 import store from '../store'
export default{
    name:'ProductDetails',
    computed: {
        selectedProduct(){
          return store.state.products.find(product => product.id == this.$route.params.id)
        }
    },
    methods:{
        ...mapActions(["addToCart"]),
        clickAddToCart () {
            this.addToCart(this.selectedProduct)
            router.push({ name: 'cartView' })
        }
    }
}
</script>
<style scoped>
.product-container .card-img-top{
    width: 300px;
    height: 300px;
}
</style>