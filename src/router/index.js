import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductsList
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: () => import('../components/ProductDetails.vue')
  },
  {
    path: '/cart',
    name: 'cartView',
    component: () => import('../components/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
