import { describe, expect, it } from "vitest";
import { canReconfigure } from "./canReconfigure"

describe("canReconfigure", () => {
	// it("Should be a function", () => {
	// 	expect(canReconfigure).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => canReconfigure()).toThrow()
	// })

	it("Should throw error if the first parameter is not a string", () => {
		expect(() => canReconfigure(Number, String)).toThrow()
		expect(() => canReconfigure(Boolean, String)).toThrow()
		expect(() => canReconfigure(Object, String)).toThrow()
		expect(() => canReconfigure(Function, String)).toThrow()
		expect(() => canReconfigure(Array, String)).toThrow()
	})

	it("Should throw error if the second parameter is not a string either", () => {
		expect(() => canReconfigure(String, Number)).toThrow()
		expect(() => canReconfigure(String, Boolean)).toThrow()
		expect(() => canReconfigure(String, Object)).toThrow()
		expect(() => canReconfigure(String, Function)).toThrow()
		expect(() => canReconfigure(String, Array)).toThrow()
	})

	it("Should return a boolean", () => {
		expect(canReconfigure("a", "b")).toBeTypeOf("boolean")
	})

	// it("Should return true when the two string don't have the same length", () => {
	// 	expect(canReconfigure("YE", "ZYY")).toBe(false)
	// })

	it("Should return true in the following exercise", () => {
		expect(canReconfigure('BAL', 'LIB')).toBe(true)
	})

	it("Should return false in the following exercise", () => {
		expect(canReconfigure('CON', 'JUU')).toBe(false)
	})

	it("Should return false if the strings have no equal length", () => {
		expect(canReconfigure("TU", "MAMI")).toBe(false)
	})
})