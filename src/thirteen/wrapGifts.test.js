import { describe, expect, it } from "vitest";

const wrapGifts = (gifts) => {
	if (!gifts || !Array.isArray(gifts)) throw new Error()

	let wrappedPresents = []
	if (gifts.length === 0) return wrappedPresents

	const edgeWraps = "*".repeat(gifts[0].length) + "**"
	wrappedPresents = gifts.map(gift => `*${gift}*`)
	wrappedPresents.unshift(edgeWraps)
	wrappedPresents.push(edgeWraps)

	return wrappedPresents
}

describe("Thirteen exercise tests", () => {
	// it("wrapGifts should be a function", () => {
	// 	expect(wrapGifts).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => wrapGifts()).toThrow()
	// })

	it("Should throw err if parameter is not an array", () => {
		expect(() => wrapGifts(Number)).toThrow()
		expect(() => wrapGifts(String)).toThrow()
		expect(() => wrapGifts(Boolean)).toThrow()
		expect(() => wrapGifts(Object)).toThrow()
		expect(() => wrapGifts(Function)).toThrow()
	})

	it("Should return an arr as response", () => {
		expect(wrapGifts([])).toStrictEqual([])
	})

	it("Should wrap gifts with astherics", () => {
		expect(wrapGifts(["📷", "⚽️"])).toStrictEqual([ '****',
			'*📷*',
			'*⚽️*',
			'****'
		])
	})

	it("Should be able to adapt it's wrapping size", () => {
		expect(wrapGifts(["🏈🎸", "🎮🧸"])).toStrictEqual([ '******',
			'*🏈🎸*',
			'*🎮🧸*',
			'******'
		])
	})
})