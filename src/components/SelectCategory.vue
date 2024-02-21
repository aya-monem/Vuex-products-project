<template>
    <div class="w-80 mx-auto d-flex align-items-center">
        <h4>Select Category: </h4>
        <select @change="onChangeSelect($event)"
            aria-label="Default select example">
            <option selected value="0">All</option>
            <option v-for="(category, index) in categories" 
                    :key="index" :value="category">
                    {{ category }}
                </option>
            
        </select>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default{
    name:"SelectCategory",
    props: ['categories'],
    methods:{
        ...mapActions(['filterProductsByCategory']),
        onChangeSelect(e){
            let selectedCategory = e.target.value;
            this.filterProductsByCategory(selectedCategory)
            
        }
    }
}
</script>