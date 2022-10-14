export const shouldBuyFidelity = (times) => {
	if (!times || typeof times !== "number") throw new Error()

	// I know this beforehand
	const isConvenientFrom = 24

	return times >= isConvenientFrom
}