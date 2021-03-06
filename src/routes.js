import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Product from '@/components/Product'

Vue.use(Router)

var routes = new Router({
  routes: [
    { name: 'Home', component: Home, path: '/' },
    { name: 'Products', component: Products, path: '/products' },
    { name: 'Product', component: Product, path: '/products/:productId' },
  ]
})




export default routes



