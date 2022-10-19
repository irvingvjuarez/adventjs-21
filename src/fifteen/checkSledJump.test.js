import { describe, expect, it } from "vitest";
import { checkSledJump } from "./checkSledJump"

describe("checkSledJump tests", () => {
	// it("checkSledJump should be a function", () => {
	// 	expect(checkSledJump).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => checkSledJump()).toThrow()
	// })

	it("Should throw if the parameter is not an array", () => {
		expect(() => checkSledJump(Number)).toThrow()
		expect(() => checkSledJump(String)).toThrow()
		expect(() => checkSledJump(Boolean)).toThrow()
		expect(() => checkSledJump(Object)).toThrow()
		expect(() => checkSledJump(Function)).toThrow()
	})

	it("Should accept only arrays with at least 3 elements", () => {
		expect(checkSledJump([])).toBe(false)
		expect(checkSledJump([1])).toBe(false)
		expect(checkSledJump([1,2])).toBe(false)
	})

	it("Should return a boolean", () => {
		expect(checkSledJump([1,2,3])).toBeTypeOf("boolean")
	})

	it("Should be able to analyze if the array form an curve", () => {
		expect(checkSledJump([0,1,0])).toBe(true)
		expect(checkSledJump([1,2,3,2,1])).toBe(true)
	})

	it("Should be able to analyze if the curve only increased but never decreased", () => {
		expect(checkSledJump([1, 2, 3])).toBe(false)
	})

	it("Should be able to analyze if it increases or decreases more than once (if it resembles a roller coaster)", () => {
		expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
	})
})