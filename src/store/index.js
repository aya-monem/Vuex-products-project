import { createStore } from 'vuex'

export default createStore({
  state: () => ({ 
    products:[],
    filteredProducts: [],
    cart:[]
   }),
  mutations: { 
    setAllProducts: (state, products) => {
      state.products = products;
      state.filteredProducts = products
    },
    addProductToCart: (state , product) => state.cart.push(product),
    removeProductFromCart:(state, productId) => {
      state.cart = state.cart.filter(item => item.id != productId)
    },
    categorizeProducts: (state ,selectedCategory) => {
      if ( selectedCategory != 0){
        state.filteredProducts = state.products.filter(product => product.category == selectedCategory)
      }
      else{
        state.filteredProducts = state.products
      }
    },
   },
  
  
  actions: { 
    async fetchAllProducts({commit}){
      const response = await fetch('https://dummyjson.com/products').then(res => res.json())
      commit('setAllProducts' , response.products)
    },
    addToCart({ commit }, product) {
      commit('addProductToCart', product);
    },
    removeFromCart({commit} , productID){
      commit('removeProductFromCart' , productID)
    },
    filterProductsByCategory({commit} , selectedCategory){
      commit('categorizeProducts' , selectedCategory)
    }
   },
  getters: {  
    allProducts : state => state.products,
    filteredProducts: state => state.filteredProducts
  }
})
