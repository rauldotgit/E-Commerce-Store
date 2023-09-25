import {
	NavigationGuardNext,
	RouteLocationNormalized,
	createRouter,
	createWebHistory,
} from 'vue-router'
import { getProduct } from '../data/products.ts'
import Home from '../pages/Landing/landing-page.vue'
import { useSeoMeta } from '@unhead/vue'
import {
	getLandingPageMeta,
	getCategoryPageMeta,
	get404PageMeta,
	getCheckoutPageMeta,
} from '../data/meta'

function parseRouteId(id: string | string[]): number {
	if (Array.isArray(id)) return parseInt(id[0])
	return parseInt(id)
}

function categoryRoute(category: string) {
	return {
		path: category,
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: category },
		beforeEnter: () => {
			const meta = getCategoryPageMeta(category)
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
	}
}

function productRoute(category: string) {
	return {
		path: `/${category}/:id`,
		name: category,
		component: () => import('../pages/Product/product-page.vue'),
		// eslint-disable-next-line
		props: (route: any) => ({
			category: category,
			productId: parseInt(route.params.id),
		}),
		beforeEnter: (
			to: RouteLocationNormalized,
			_2: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			if (!getProduct(category, parseRouteId(to.params.id))) {
				next('/404')
			} else {
				next()
			}
		},
	}
}

// separate routes, as we change these often
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: () => {
			const meta = getLandingPageMeta()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
	},
	{
		path: '/keyboards',
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: 'keyboards' },
		beforeEnter: () => {
			const meta = getCategoryPageMeta('keyboards')
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
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
		beforeEnter: () => {
			const meta = getCategoryPageMeta('keycaps')
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
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
			if (!getProduct('keycaps', parseRouteId(to.params.id))) {
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
		beforeEnter: () => {
			const meta = getCategoryPageMeta('deskmats')
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
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
			if (!getProduct('deskmats', parseRouteId(to.params.id))) {
				next('/404')
			} else {
				next()
			}
		},
	},
	{
		path: '/checkout',
		component: () => import('../pages/Checkout/checkout-page.vue'),
		beforeEnter: () => {
			const meta = getCheckoutPageMeta()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
	},
	{
		path: '/404',
		name: 'notFound',
		component: () => import('../pages/404-page.vue'),
		beforeEnter: () => {
			const meta = get404PageMeta()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
	},
	{
		path: '/:patchMatch(.*)',
		component: () => import('../pages/404-page.vue'),
		beforeEnter: () => {
			const meta = get404PageMeta()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
			})
		},
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
