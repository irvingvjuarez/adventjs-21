export const maxProfit = (prices) => {
	if (!prices || prices instanceof Array === false) throw new Error()

	let differences = []
	let size = prices.length

	for (let i = 0; i < size; i++) {
		for (let index in prices) {
			if (index !== 0) {
				differences.push(prices[index] - prices[0])
			}
		}
		prices.shift()
	}

	const max = Math.max(...differences)

	return max > 0 ? max : -1
}