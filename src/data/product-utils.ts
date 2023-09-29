import { product } from './product-types'
import { products } from './products'

export function getCount(category: string): number {
	return products[category].length
}

export function getSelection(
	productCategory: string,
	productId: number,
): product[] {
	const items: product[] = []

	// get all products which do not have the same category and id
	// select a random selection of three items
	// inefficient but easy to implement

	for (const value of Object.values(products)) {
		for (const item of value) {
			if (item.id === productId && item.category === productCategory) {
				continue
			} else {
				items.push(item)
			}
		}
	}

	items.sort(() => Math.random() - 0.5)
	return items.slice(0, 3)
}

export function getProductsOfType(category: string): product[] {
	if (category in products) {
		return products[category]
	}
	return []
}

export function getProduct(category: string, id: number): product | null {
	return products[category].find((item) => item.id == id) || null
}
