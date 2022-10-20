import { describe, expect, it } from "vitest";
import { decodeNumbers } from "./decodeNumbers"

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