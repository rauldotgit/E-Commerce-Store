import {
	landingPageMeta,
	categoryPageMeta,
	checkoutPageMeta,
	fofPageMeta,
} from './meta'
import { meta } from './meta-types'
import { capitalize } from '../utils/utilities'
import { product } from './product-types.ts'

export function getLandingPageMeta(): meta {
	return landingPageMeta
}

export function getCategoryPageMeta(category: string): meta {
	return categoryPageMeta[category]
}

export function getProductPageMeta(product: product): meta {
	return {
		title:
			product.header +
			' ' +
			capitalize(product.category.slice(0, -1)) +
			' ' +
			'| KIIIBS',
		description: product.text,
		image: product.src,
	}
}

export function getCheckoutPageMeta(): meta {
	return checkoutPageMeta
}

export function get404PageMeta(): meta {
	return fofPageMeta
}
