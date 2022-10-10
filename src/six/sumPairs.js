export const sumPairs = (options, target) => {
	if (!options || !target) throw new Error()
	if (!Array.isArray(options) || typeof target !== "number") throw new Error()

	const size = options.length;
	let currentValue

	for (let i = 0; i < size; i++) {
		currentValue = options.shift()
		let difference = target - currentValue;
		if (options.includes(difference)) {
			return [currentValue, difference]
		}
	}

	return null
}