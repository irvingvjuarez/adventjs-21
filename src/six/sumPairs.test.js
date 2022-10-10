import { describe, expect, it } from "vitest";
import { sumPairs } from "./sumPairs"

describe("Sixth algorithm exercise", () => {
	// it("sumPairs must be a Function", () => {
	// 	expect(sumPairs).toBeTypeOf("function")
	// })

	// it("sumPairs should receive 2 parameters", () => {
	// 	expect(() => sumPairs()).toThrow()
	// })

	it("Should receive the first parameter as an array of numbers and the second as a number", () => {
		expect(() => sumPairs(Number, Number)).toThrow()
		expect(() => sumPairs(String, String)).toThrow()
		expect(() => sumPairs(Array, String)).toThrow()
		expect(() => sumPairs(Number, Array)).toThrow()
	})

	it("Should return an array of numbers summing up the target", () => {
		expect(sumPairs([3, 5, 7, 2], 10)).toStrictEqual([3, 7])
		expect(sumPairs([2, 2, 3, 1], 4)).toStrictEqual([2, 2])
		expect(sumPairs([6, 7, 1, 2], 8)).toStrictEqual([6, 2])
		expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toStrictEqual([1, 5])
	})

	it("Should return null if no sum options are available", () => {
		expect(sumPairs([-3, -2, 7, -5], 10)).toBe(null)
	})
})