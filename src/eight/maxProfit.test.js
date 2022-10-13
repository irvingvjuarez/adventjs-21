import { describe, expect, it } from "vitest";
import { maxProfit } from "./maxProfit"

describe("Eight exercise test", () => {
	// it("maxProfit should be a function", () => {
	// 	expect(maxProfit).toBeTypeOf("function")
	// })

	// it("Should receive a parameter", () => {
	// 	expect(() => maxProfit()).toThrow()
	// })

	it("Should receive a parameter of type Array", () => {
		expect(() => maxProfit(String)).toThrow()
		expect(() => maxProfit(Number)).toThrow()
		expect(() => maxProfit(Boolean)).toThrow()
		expect(() => maxProfit(Object)).toThrow()
	})

	it("Should return a number", () => {
		expect(maxProfit([])).toBeTypeOf("number")
	})

	it("Should return the highest difference between the numbers", () => {
		expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toBe(16) // -> 16 (compra a 18, vende a 34)
		expect(maxProfit([10, 20, 30, 40, 50, 60, 70])).toBe(60) // -> 60 (compra a 10, vende a 70)
	})

	it("Should return -1 if there is no benefit from the prices", () => {
		expect(maxProfit([18, 15, 12, 11, 9, 7])).toBe(-1)
		expect(maxProfit([3, 3, 3, 3, 3])).toBe(-1)
	})
})