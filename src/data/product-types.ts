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
