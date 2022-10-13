export const groupBy = (items, separatedBy) => {
	const invalidRequest = !items
		|| !separatedBy
		|| !Array.isArray(items)
		|| (separatedBy instanceof Function === false && typeof separatedBy !== "string")

	if (invalidRequest) throw new Error()

	const groupedValues = {}
	const isPropScenario = typeof separatedBy === "string"

	let differentProps = items.map(item => (isPropScenario)
		? item[separatedBy]
		: separatedBy(item)
	)

	differentProps = [...new Set(differentProps)]

	differentProps.forEach(prop => {
		groupedValues[prop] = items.filter(item => (isPropScenario)
			? item[separatedBy] === prop
			: separatedBy(item) === prop
		)
	})

	return groupedValues
}