import { describe, expect, it } from "vitest";

const countPackages = (carriers, carrierID) => {
	if (!carriers || !Array.isArray(carriers)) throw new Error()
	if (!carrierID || typeof carrierID !== "string") throw new Error()
}

describe("countPackages tests", () => {
	it("countPackages should be a function", () => {
		expect(countPackages).toBeTypeOf("function")
	})

	it("Should throw error if no parameters provided", () => {
		expect(() => countPackages()).toThrow()
	})

	it("Should throw error if only one parameter provided", () => {
		expect(() => countPackages(Array)).toThrow()
	})

	it("Should throw error if both params provided but if they are not Array, String", () => {
		expect(() => countPackages(Array, Number)).toThrow()
		expect(() => countPackages(Array, Boolean)).toThrow()
		expect(() => countPackages(Array, Array)).toThrow()
		expect(() => countPackages(Array, Function)).toThrow()
		expect(() => countPackages(Array, Object)).toThrow()
	})
})