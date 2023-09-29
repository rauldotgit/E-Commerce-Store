import { createRouter, createWebHistory } from 'vue-router'
import {
	generalRoute,
	categoryRoute,
	productRoute,
	landingRoute,
} from './route-utils'
import { get404PageMeta, getCheckoutPageMeta } from '../data/meta'

const routes = [
	landingRoute(),
	generalRoute({
		routePath: 'checkout',
		component: '../pages/Checkout/checkout-page.vue',
		metaFunc: getCheckoutPageMeta,
		lazy: true,
	}),
	generalRoute({
		routePath: '404',
		component: '../pages/404-page.vue',
		metaFunc: get404PageMeta,
		lazy: true,
	}),
	generalRoute({
		routePath: ':patchMatch(.*)',
		component: '../pages/404/404-page.vue',
		metaFunc: get404PageMeta,
		lazy: true,
	}),
	categoryRoute('keyboards'),
	categoryRoute('keycaps'),
	categoryRoute('deskmats'),
	productRoute('keyboards'),
	productRoute('keycaps'),
	productRoute('deskmats'),
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
