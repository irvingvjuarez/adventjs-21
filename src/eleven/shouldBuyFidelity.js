const ticketPrice = 12

export const shouldBuyFidelity = (times) => {
	if (!times || typeof times !== "number") throw new Error()

	const withoutFidelity = ticketPrice * times
	let fidelity = 250

	for (let i = 1; i <= times; i++) {
		const relativePrice = ticketPrice * (0.75 ** i)
		fidelity += relativePrice
	}

	return fidelity < withoutFidelity
}