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

	let decoding = signs.split("").map((sign) => {
		return (sign in meanings) ? meanings[sign] : NaN
	})

	decoding = decoding.map((value, index) => {
		const inArrayLimit = decoding[index + 1]
		const isCurrentMinor = inArrayLimit
			&& (decoding[index + 1] > decoding[index])

		return (inArrayLimit && isCurrentMinor) ? value * -1 : value
	})

	return decoding.reduce((prev, current) => prev + current, 0)
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

	it("Should return NaN if sign is not identified", () => {
		expect(decodeNumbers(".?")).toBe(NaN)
	})

	it("Should evaluate if the next number in the array is greater, the current number substract or becomes negative", () => {
		expect(decodeNumbers(".,")).toBe(4)
	})

	it("Should validate the numbers correctly", () => {
		expect(decodeNumbers(",...")).toBe(8)
	})

	it("Should able to decode really big scripts", () => {
		expect(decodeNumbers(".........!")).toBe(107)
	})
})