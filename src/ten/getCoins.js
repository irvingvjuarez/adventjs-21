const coinsValues = [1,2,5,10,20,50]

const inValueCoins = (change) => {
	return coinsValues.includes(change)
}

const getIndex = (change) => {
	return coinsValues.findIndex(coin => coin === change)
}

const mutate = (change, returnedCoins) => {
	const index = getIndex(change)
	returnedCoins[index] = 1
	return returnedCoins
}

export const getCoins = (change) => {
	if (!change || typeof change !== "number") throw new Error()

	const returnedCoins = [0,0,0,0,0,0]

	if (inValueCoins(change)) return mutate(change, returnedCoins)

	const plainCoinsChange = []
	while (change > 0) {
		for (let i = 5; i >= 0; i--){
			const currentVal = coinsValues[i]

			if (change - currentVal >= 0) {
				change -= currentVal
				plainCoinsChange.push(currentVal)
				break
			}
		}
	}

	plainCoinsChange.forEach(value => {
		const index = coinsValues.findIndex(coin => coin === value)
		const newValue = returnedCoins[index] + 1
		returnedCoins[index] = newValue
	})

	return returnedCoins
}