import LandingPage from '../pages/Landing/landing-page.vue'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { getProduct } from '../data/products.ts'
import {
	meta,
	getCategoryPageMeta,
	getProductPageMeta,
	getLandingPageMeta,
} from '../data/meta'

function parseRouteId(id: string | string[]): number {
	if (Array.isArray(id)) return parseInt(id[0])
	return parseInt(id)
}

interface generalRouteParams {
	routePath: string
	name?: string
	component: string
	lazy?: boolean
	metaFunc: () => meta
}

export function landingRoute() {
	return {
		path: '/',
		name: 'Home',
		component: LandingPage,
		beforeEnter: () => {
			const meta = getLandingPageMeta()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
				ogTitle: meta.title,
				ogDescription: meta.description,
				ogImage: meta.image,
			})
		},
	}
}

export function generalRoute({
	routePath,
	name,
	component,
	metaFunc,
}: generalRouteParams) {
	return {
		path: `/${routePath}`,
		...(name && { name: name }),
		component: () => import(component),
		beforeEnter: () => {
			const meta = metaFunc()
			useSeoMeta({
				title: meta.title,
				description: meta.description,
				ogTitle: meta.title,
				ogDescription: meta.description,
				ogImage: meta.image,
			})
		},
	}
}

export function categoryRoute(category: string) {
	return {
		path: `/${category}`,
		component: () => import('../pages/Category/category-page.vue'),
		props: { category: category },
		beforeEnter: () => {
			const meta = getCategoryPageMeta(category)
			useSeoMeta({
				title: meta.title,
				description: meta.description,
				ogTitle: meta.title,
				ogDescription: meta.description,
				ogImage: meta.image,
			})
		},
	}
}

export function productRoute(category: string) {
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
			_: RouteLocationNormalized,
			next: NavigationGuardNext,
		) => {
			const product = getProduct(category, parseRouteId(to.params.id))
			if (!product) {
				next('/404')
			} else {
				const meta = getProductPageMeta(product)
				useSeoMeta({
					title: meta.title,
					description: meta.description,
					ogTitle: meta.title,
					ogDescription: meta.description,
					ogImage: meta.image,
				})
				next()
			}
		},
	}
}
