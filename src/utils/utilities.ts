export function randomRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function capitalize(str: string): string {
	if (str.length === 1) {
		return str.toUpperCase()
	}

	return str.charAt(0).toUpperCase() + str.slice(1)
}
