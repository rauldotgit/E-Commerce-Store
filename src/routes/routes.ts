import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Landing/Landing.vue'
// separate routes, as we change these often
const routes = [
		{path: '/', name: 'Home', component: Home},
		{
			path: '/keyboards', 
			component: ()=>import('../pages/Category/Category.vue'),
			props: {category: 'keyboards'},
		},
		{
			path: '/keyboards/:id', 
			name: 'keyboards',
			component: ()=>import('../pages/Product/Product.vue'),
			props: (route: any) =>({
				category: 'keyboards',
				productId: parseInt(route.params.id)
			}),
		},
		{
			path: '/keycaps', 	
			component: ()=>import('../pages/Category/Category.vue'),
			props: {category: 'keycaps'},
		},
		{
			path: '/keycaps/:id', 
			name: 'keycaps',
			component: ()=>import('../pages/Product/Product.vue'),
			props: (route: any) =>({
				category: 'keycaps',
				productId: parseInt(route.params.id)
			}),
		},
		{
			path: '/deskmats', 
			component: ()=>import('../pages/Category/Category.vue'),
			props: {category: 'deskmats'},
		},
		{
			path: '/deskmats/:id', 
			name: 'deskmats', 
			component: ()=>import('../pages/Product/Product.vue'),
			props: (route: any) =>({
				category: 'deskmats',
				productId: parseInt(route.params.id)
			}),
		},
		{
			path: '/checkout', 
			component: ()=>import('../pages/Checkout/Checkout.vue'),
		},
	]

const Router = createRouter({
	history: createWebHistory(),
	routes,
	
	// @ts-ignore
	scrollBehavior(to, from, savedPosition){
		if(savedPosition){
			return savedPosition
		} else {
			return { top: 0}
		}
	}
})

export default Router 