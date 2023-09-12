import {
	NavigationGuardNext,
	RouteLocationNormalized,
	createRouter,
	createWebHistory,
} from 'vue-router'
import { getProduct } from '../data/products.ts'
import Home from '../pages/Landing/landing-page.vue'

function parseRouteId(id: string | string[]): number {
	if (Array.isArray(id)) return parseInt(id[0])
	return parseInt(id)
}
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
		beforeEnter: (
			to: RouteLocationNormalized,
			_2: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (!getProduct('keyboards', parseRouteId(to.params.id))) {
				next('/404')
			} else {
				next()
			}
		},
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
		beforeEnter: (
			to: RouteLocationNormalized,
			_2: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (!getProduct('keyboards', parseRouteId(to.params.id))) {
				next('/404')
			} else {
				next()
			}
		},
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
		beforeEnter: (
			to: RouteLocationNormalized,
			_2: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (!getProduct('keyboards', parseRouteId(to.params.id))) {
				next('/404')
			} else {
				next()
			}
		},
	},
	{
		path: '/checkout',
		component: () => import('../pages/Checkout/checkout-page.vue'),
	},
	{
		path: '/404',
		name: 'notFound',
		component: () => import('../pages/404-page.vue'),
	},
	{
		path: '/:patchMatch(.*)',
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
