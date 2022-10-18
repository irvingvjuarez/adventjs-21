import { describe, expect, it } from "vitest";
import { missingReindeer } from "./missingReindeer"

describe("Missing reindeer tests", () => {
	// it("missingReindeer should be a function", () => {
	// 	expect(missingReindeer).toBeTypeOf("function")
	// })

	// it("Should throw an error if no parameters provided", () => {
	// 	expect(() => missingReindeer()).toThrow()
	// })

	it("Should throw error if the parameter is not an array", () => {
		expect(() => missingReindeer(Number)).toThrow()
		expect(() => missingReindeer(String)).toThrow()
		expect(() => missingReindeer(Function)).toThrow()
		expect(() => missingReindeer(Object)).toThrow()
		expect(() => missingReindeer(Boolean)).toThrow()
	})

	it("Should return an integer", () => {
		expect(missingReindeer([])).toBeTypeOf("number")
		expect(missingReindeer([])).toBe(0)
	})

	it("Should be able to return the following id if everything in order", () => {
		expect(missingReindeer([0])).toBe(1)
		expect(missingReindeer([0,1])).toBe(2)
	})

	it("Should be able to identify the missing reindeer if this exists", () => {
		expect(missingReindeer([0,2,3])).toBe(1)
	})

	it("Should identify the missing reindeer in an unordered array", () => {
		expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toBe(4)
	})

	it("Should be able to predict the missing reindeer if it is at the beginning of the array", () => {
		expect(missingReindeer([1])).toBe(0)
	})
})