import { describe, expect, it } from "vitest";

const decodeNumbers = (signs) => {
	if (!signs || typeof signs !== "string") throw new Error()

	const meanings = {
		".": 1,
		",": 5,
		":": 10,
		";": 50,
		"!": 100
	}

	let res = NaN

	const decoding = signs.split("").map(sign => {
		if (sign in meanings) return meanings[sign]
	})

	res = decoding.reduce()

	return res
}

describe("decodeNumbers tests", () => {
	// it("decodeNumbers should be a function", () => {
	// 	expect(decodeNumbers).toBeTypeOf("function")
	// })

	// it("Should throw an error if no params provided", () => {
	// 	expect(() => decodeNumbers()).toThrow()
	// })

	it("Should receive a string as parameter", () => {
		expect(() => decodeNumbers(Number)).toThrow()
		expect(() => decodeNumbers(Boolean)).toThrow()
		expect(() => decodeNumbers(Function)).toThrow()
		expect(() => decodeNumbers(Array)).toThrow()
		expect(() => decodeNumbers(Object)).toThrow()
	})

	it("Should return a number", () => {
		expect(decodeNumbers(".")).toBeTypeOf("number")
	})

	it("Should transform the sign to the number and sum them up", () => {
		expect(decodeNumbers("...")).toBe(3)
	})
})