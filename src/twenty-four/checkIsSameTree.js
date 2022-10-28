const sortObj = (obj) => {
	const isNotObj = typeof obj !== "object"

	if (isNotObj) return obj

	const right = obj?.right;
	const left = obj?.left
	const value = obj?.value

	let rightCopy = right
	let leftCopy = left

	if (right instanceof Object) rightCopy = sortObj(right)

	if (left instanceof Object) leftCopy = sortObj(left)

	return {
		value,
		right: rightCopy,
		left: leftCopy
	}
}

export const checkIsSameTree = (treeA, treeB) => {
	const isInvalid = !treeA || typeof treeA !== "object"
		|| treeA instanceof Object === false
		|| !treeB || typeof treeB !== "object"
		|| treeB instanceof Object === false
	if (isInvalid) throw new Error()

	treeA = sortObj(treeA)
	treeB = sortObj(treeB)

	const strA = JSON.stringify(treeA)
	const strB = JSON.stringify(treeB)

	const areEqual = (strA === strB);

	return areEqual
}