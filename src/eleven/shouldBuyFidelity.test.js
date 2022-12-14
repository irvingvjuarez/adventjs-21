import { describe, expect, it } from "vitest";
import { shouldBuyFidelity } from "./shouldBuyFidelity"

describe("Eleven exercise tests", () => {
	// it("shouldBuyFidelity should be a funciton", () => {
	// 	expect(shouldBuyFidelity).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter is provided", () => {
	// 	expect(() => shouldBuyFidelity()).toThrow()
	// })

	it("Should receive a number as parameter", () => {
		expect(() => shouldBuyFidelity(String)).toThrow()
		expect(() => shouldBuyFidelity(Boolean)).toThrow()
		expect(() => shouldBuyFidelity(Function)).toThrow()
		expect(() => shouldBuyFidelity(Object)).toThrow()
		expect(() => shouldBuyFidelity(Array)).toThrow()
	})

	it("Should return a boolean", () => {
		expect(shouldBuyFidelity(2)).toBeTypeOf("boolean")
	})

	it("Should return false if it's not convenient the fidelity membership", () => {
		expect(shouldBuyFidelity(1)).toBe(false)
	})

	it("Should return true if it's convinient to acquire the membership", () => {
		expect(shouldBuyFidelity(100)).toBe(true)
	})
})