export type contents = {
	count: number
	content: string
}

export type product = {
	id: number
	category: string
	src: string
	topSrc: string
	botSrc: string
	rightSrc: string
	nu: boolean
	header: string
	subheader: string
	text: string
	features: string
	inthebox: contents[]
	price: number
}

export interface catalog {
	[key: string]: product[]
}

// const categories: string[] = ["keyboards", "keycaps", "deskmats"]

const products: catalog = {
	keyboards: [
		{
			id: 0,
			category: 'keyboards',
			src: '/products/keyboards/pulsar-show.webp',
			topSrc: '/products/keyboards/pulsar-left.webp',
			botSrc: '/products/keyboards/pulsar-right.webp',
			rightSrc: '/products/keyboards/pulsar-detail.webp',
			nu: true,
			header: 'XX59',
			subheader: 'Keyboard',
			text: 'The new XX59 keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [
				{ count: 1, content: 'Keyboard' },
				{ count: 1, content: 'KIIBS Carrying Case' },
				{ count: 1, content: 'Model X Keycaps' },
				{ count: 1, content: 'USB Type-C Cable' },
			],
			price: 599,
		},
		{
			id: 1,
			category: 'keyboards',
			src: '/products/keyboards/keeb4-show.webp',
			topSrc: '/products/keyboards/cow-buttons.webp',
			botSrc: '/products/keyboards/cow-back.webp',
			rightSrc: '/products/keyboards/cow-full.webp',
			nu: false,
			header: 'ZX9',
			subheader: 'Keyboard',
			text: 'The new ZX9 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [
				{ count: 1, content: 'Keyboard' },
				{ count: 1, content: 'KIIBS Carrying Case' },
				{ count: 1, content: 'Model X Keycaps' },
				{ count: 1, content: 'USB Type-C Cable' },
			],
			price: 599,
		},
		{
			id: 2,
			category: 'keyboards',
			src: '/products/keyboards/keeb1-show.webp',
			topSrc: '/products/keyboards/mx-detail.webp',
			botSrc: '/products/keyboards/mx-button.webp',
			rightSrc: '/products/keyboards/mx-cable.webp',
			nu: false,
			header: 'XX99 Mark II',
			subheader: 'Keyboard',
			text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [
				{ count: 1, content: 'Keyboard' },
				{ count: 1, content: 'KIIBS Carrying Case' },
				{ count: 1, content: 'Model X Keycaps' },
				{ count: 1, content: 'USB Type-C Cable' },
			],
			price: 599,
		},
	],
	keycaps: [
		{
			id: 0,
			category: 'keycaps',
			src: '/products/keycaps/cap2-2.webp',
			topSrc: '/products/keycaps/cap2-3.webp',
			botSrc: '/products/keycaps/cap2.webp',
			rightSrc: '/products/keycaps/caps1-show.webp',
			nu: true,
			header: 'XX01 Metal',
			subheader: 'Keycap',
			text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [{ count: 1, content: 'Metal Keycap' }],
			price: 599,
		},
		{
			id: 1,
			category: 'keycaps',
			src: '/products/keycaps/cap1-2.webp',
			topSrc: '/products/keycaps/cap1-3.webp',
			botSrc: '/products/keycaps/cap1.webp',
			rightSrc: '/products/keycaps/caps1-show.webp',
			nu: false,
			header: 'XX02 Metal',
			subheader: 'Keycap',
			text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [{ count: 1, content: 'Metal Keycap' }],
			price: 599,
		},
	],
	deskmats: [
		{
			id: 0,
			category: 'deskmats',
			src: '/products/deskmats/mat1-show.webp',
			topSrc: '/products/deskmats/grrr-full.webp',
			botSrc: '/products/deskmats/grrr-close-alt.webp',
			rightSrc: '/products/deskmats/grrr-close.webp',
			nu: true,
			header: '"Grrr"',
			subheader: 'Deskmat',
			text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [
				{ count: 1, content: 'Deskmat' },
				{ count: 1, content: 'Carrying Pouch' },
			],
			price: 599,
		},
		{
			id: 1,
			category: 'deskmats',
			src: '/products/deskmats/mat2-show.webp',
			topSrc: '/products/deskmats/deskmat-chicken.webp',
			botSrc: '/products/deskmats/deskmat-ox.webp',
			rightSrc: '/products/deskmats/deskmat-kraken.webp',
			nu: false,
			header: 'Mythic',
			subheader: 'Deskmat',
			text: 'The new XX99 Mark II keyboard is the pinnacle of pristine typing. It redefines your premium keyboard experience by providing a balanced depth and precision to each press of a key.',
			features:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Mi bibendum neque egestas congue quisque egestas diam in arcu. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Rutrum quisque non tellus orci ac auctor augue mauris augue.',
			inthebox: [
				{ count: 1, content: 'Deskmat' },
				{ count: 1, content: 'Carrying Pouch' },
			],
			price: 599,
		},
	],
}

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
