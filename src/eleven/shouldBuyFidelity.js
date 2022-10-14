export const shouldBuyFidelity = (times) => {
	if (!times || typeof times !== "number") throw new Error()

	return times >= 24
}