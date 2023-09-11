import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Landing/landing-page.vue'
// separate routes, as we change these often
const routes = [
	{ path: '/', name: 'Home', component: Home },
	{
		path: '/keyboards',
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: 'keyboards' },
	},
	{
		path: '/keyboards/:id',
		name: 'keyboards',
		component: () => import('../pages/Product/product-page.vue'),
		// eslint-disable-next-line
		props: (route: any) => ({
			category: 'keyboards',
			productId: parseInt(route.params.id),
		}),
	},
	{
		path: '/keycaps',
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: 'keycaps' },
	},
	{
		path: '/keycaps/:id',
		name: 'keycaps',
		component: () => import('../pages/Product/product-page.vue'),
		// eslint-disable-next-line
		props: (route: any) => ({
			category: 'keycaps',
			productId: parseInt(route.params.id),
		}),
	},
	{
		path: '/deskmats',
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: 'deskmats' },
	},
	{
		path: '/deskmats/:id',
		name: 'deskmats',
		component: () => import('../pages/Product/product-page.vue'),
		// eslint-disable-next-line
		props: (route: any) => ({
			category: 'deskmats',
			productId: parseInt(route.params.id),
		}),
	},
	{
		path: '/checkout',
		component: () => import('../pages/Checkout/checkout-page.vue'),
	},
	{
		path: '/:patchMatch(.*)',
		name: 'notFound',
		component: () => import('../pages/404-page.vue'),
	},
]

const Router = createRouter({
	history: createWebHistory(),
	routes,

	scrollBehavior(_1, _2, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

export default Router
