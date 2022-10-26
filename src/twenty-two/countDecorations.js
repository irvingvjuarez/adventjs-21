export const countDecorations = (tree) => {
	const isInvalid = !tree
		|| tree instanceof Object === false
		|| typeof tree !== "object"

	if (isInvalid) throw new Error()

	let decorations = 0
	const branchesNames = Object.keys(tree)

	for(let branchName of branchesNames) {
		const branchValue = tree[branchName]
		const isNumber = typeof branchValue === "number"

		if (branchValue) {
			decorations += (isNumber)
				? branchValue
				: countDecorations(branchValue)
		}
	}

	return decorations
}