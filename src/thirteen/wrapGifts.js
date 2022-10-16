export const wrapGifts = (gifts) => {
	if (!gifts || !Array.isArray(gifts)) throw new Error()

	let wrappedPresents = []
	if (gifts.length === 0) return wrappedPresents

	const edgeWraps = "*".repeat(gifts[0].length) + "**"
	wrappedPresents = gifts.map(gift => `*${gift}*`)
	wrappedPresents.unshift(edgeWraps)
	wrappedPresents.push(edgeWraps)

	return wrappedPresents
}