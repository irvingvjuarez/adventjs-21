export const createTree = (height) => {
	if (!height || typeof height !== "number") throw new Error()
	if (height < 1 || height > 100) throw new Error()

	let tree = ""
	let borders = height - 1
	let asthericsNum = 1

	const treeBorder = "_".repeat(borders)
	const treeBase = `${treeBorder}#${treeBorder}`
	const treeTrunk = `${treeBase}\n${treeBase}`

	for (let i = 0; i < height; i++) {
		const astherics = "*".repeat(asthericsNum)
		const spaces = "_".repeat(borders)
		tree += `${spaces}${astherics}${spaces}\n`

		asthericsNum += 2
		borders -= 1
	}

	return tree + treeTrunk
}