interface meta {
	title: string
	description: string
}

type metaContainer = {
	[key: string]: meta
}

const landingPageMeta: meta = {
	title: 'KIIIBS Mechanical Keyboard Store',
	description:
		'We sell custom mechanical keyboards, keycaps and deskmats for your gaming and office setup, right in the heart of Berlin.',
}

const categoryPageMeta: metaContainer = {
	keyboards: {
		title: 'All KIIIBS Mechanical Keyboards',
		description:
			'Explore our selection of high quality mechanical keyboards that will elevate your typing experience.',
	},
	keycaps: {
		title: 'All KIIIBS Custom Keycaps',
		description:
			'Enjoy typing with style and upgrade your custom mechanical keyboard with our elegant keycaps',
	},
	deskmats: {
		title: 'All KIIIBS Deskmats',
		description:
			'Make yourself comfortable in your work or gaming setup with one of our KIIIBS deskmats. Soft and stylish!',
	},
}

const checkoutPageMeta: meta = {
	title: 'Checkout',
	description: 'Complete your purchase.',
}

const fofPageMeta: meta = {
	title: '404: Page not found.',
	description: '404: Page not found.',
}

export function getLandingPageMeta(): meta {
	return landingPageMeta
}

export function getCategoryPageMeta(category: string): meta {
	return categoryPageMeta[category]
}

export function getCheckoutPageMeta(): meta {
	return checkoutPageMeta
}

export function get404PageMeta(): meta {
	return fofPageMeta
}
