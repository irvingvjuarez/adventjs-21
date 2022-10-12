export const contains = (stock, target) => {
	if (!stock || !target) throw new Error()
	if (stock instanceof Object === false || typeof target !== "string") throw new Error()

	const entries = Object.entries(stock)
	for(let entry of entries) {
		const evaluated = entry[1]

		if (evaluated instanceof Object) {
			const subEntryResult = contains(evaluated, target)
			if (subEntryResult) return true
		} else if (typeof evaluated === "string"){
			if (evaluated === target) return true
		}
	}

	return false
}