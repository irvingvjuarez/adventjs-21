import { describe, expect, it } from "vitest";

const listGifts = (letter) => {
	let errorMsg = ""
	if (!letter) {
		errorMsg = "A parameter must be passed"
	} else if (typeof letter !== "string") {
		errorMsg = "A string should be passed as parameter"
	}

	if (errorMsg !== "") throw new Error(errorMsg)

	const res = {}

	letter = letter.split(" ")
		.filter(item => item !== "")
		.map(item => item.trim())

	const uniqueValues = [...new Set(letter)]

	uniqueValues.forEach(value => {
		if (value.charAt(0) !== "_") {
			const size = letter.filter(item => item == value).length
			res[value] = size
		}
	})

	return res
}

describe("List Gifts algorithm", () => {
	// it("listGifts should be a function", () => {
	// 	expect(listGifts).toBeTypeOf("function")
	// })

	it("Should receive parameters", () => {
		expect(() => listGifts()).toThrow()
	})

	it("Should a string as parameter", () => {
		expect(() => listGifts(2)).toThrow()
		expect(() => listGifts(true)).toThrow()
		expect(() => listGifts({})).toThrow()
	})

	it("Should not return an array", () => {
		expect(listGifts("a")).not.toBeInstanceOf(Array)
	})

	it("Should return an object", () => {
		expect(listGifts("a")).toBeInstanceOf(Object)
	})

	it("Should return an object with the count of its unique words", () => {
		const carta = 'bici coche balón bici coche peluche'
		expect(listGifts(carta)).toStrictEqual({
			bici: 2,
			coche: 2,
			balón: 1,
			peluche: 1
		})
	})

	it("Should omit words that start with under score", () => {
		const carta = 'bici coche balón bici _playstation coche peluche'
		expect(listGifts(carta)).toStrictEqual({
			bici: 2,
			coche: 2,
			balón: 1,
			peluche: 1
		})
	})

	it("Should take into account double spaces", () => {
		const carta = " sneakers  pc"
		expect(listGifts(carta)).toStrictEqual({
			sneakers: 1,
			pc: 1
		})
	})
})