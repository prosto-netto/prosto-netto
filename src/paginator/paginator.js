const pageDigits = (i, limit) => {
	let pages = []
	for (i; i < limit; i++) pages.push(i)
	return pages
}

const pagesRange = (x, n) => {
	switch (true) {
		case (x <= 6): return [2, 11]
		case (x >= n - 5): return [n - 9, n]
		default: return [x - 4, x + 5]
	}
}

export const paginator = (...range) => {
	let [x, n] = range
	let icons = [0, 1, -1, n, 0]
	let leftPart = icons.slice(0, (x > 6 ? 3 : 2))
	let rightPart = icons.slice((x >= (n - 5) ? 3 : 2), icons.length)
	let midlePart = pageDigits(...pagesRange(x, n))
	return [...leftPart, ...midlePart, ...rightPart]
}