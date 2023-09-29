export interface meta {
	title: string
	description: string
	image?: string
}

export type metaContainer = {
	[key: string]: meta
}
