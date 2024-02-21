<template>
    <SelectCategory :categories="productCategories"/>
    <div class="w-75 mx-auto d-flex flex-wrap justify-content-around align-items-stretch p-3" >
            <div class="card justify-content-between mb-4" style="width: 18rem;"
                v-for="product in filteredProducts" 
                :key="product.id"
                @click="showProductDetails(product.id)">
                <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
                    <img :src="product.thumbnail" class="card-img-top object-cover" :alt="product.description">
                </router-link>
                <div class="card-body">
                    <h6 class="card-title d-flex justify-content-between align-items-center">
                        {{ product.title }}
                        <span>${{ product.price }}</span>
                    </h6>
                    <p>Category: {{ product.category }}</p>
                    <!-- <p class="card-text">{{ product.description }}</p> -->
                    <!-- <a href="#" @click="showProductDetails(product.id)" class="btn btn-success btn-sm">More details</a> -->
                    <!-- <router-link :to=`/product/${product.id}` class="btn btn-primary btn-sm">More details</router-link> -->
                </div>

            </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';
import  SelectCategory  from "./SelectCategory.vue";
import router from '../router';
export default{
    name: 'ProductsList',
    computed: {
        ...mapGetters(['allProducts', 'filteredProducts']),
        productCategories(){ // get product categories 
            return [... new Set(this.allProducts.map(product => product.category))]
        }
    },
    methods:{
        ...mapActions(['fetchAllProducts']),
        showProductDetails(id){
            router.push({ name: 'productDetails', params: { id } })
        } 
    },
    mounted(){
        this.fetchAllProducts()
    },
    components:{
        SelectCategory
    }
}
</script>
<style scoped>
.card{
    height: 300px !important;
    cursor: pointer;
    background-color: lightseagreen;
    /* rgba(213, 173, 39, 0.16) !important; */
}
.card-img-top{
    height: 200px;
    /* object-fit: cover; */
}
.card:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>