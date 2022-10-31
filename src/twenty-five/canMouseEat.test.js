import { describe, expect, it } from "vitest";
import { canMouseEat } from "./canMouseEat"

describe("canMouseEat", () => {
	// it("Should be a function", () => {
	// 	expect(canMouseEat).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => canMouseEat()).toThrow()
	// })

	it("Should throw error if the first parameter is not a string", () => {
		expect(() => canMouseEat(Number, Array)).toThrow()
		expect(() => canMouseEat(Boolean, Array)).toThrow()
		expect(() => canMouseEat(Function, Array)).toThrow()
		expect(() => canMouseEat(Object, Array)).toThrow()
		expect(() => canMouseEat(Array, Array)).toThrow()
	})

	it("Should throw error if the second parameter is not an array", () => {
		expect(() => canMouseEat(String, Number)).toThrow()
		expect(() => canMouseEat(String, Boolean)).toThrow()
		expect(() => canMouseEat(String, Function)).toThrow()
		expect(() => canMouseEat(String, Object)).toThrow()
		expect(() => canMouseEat(String, String)).toThrow()
	})

	it("Should return a boolean as result", () => {
		expect(canMouseEat("left", [])).toBeTypeOf("boolean")
	})

	it("Should return true if there is food in given direction", () => {
		const room = [
			[' ', ' ', ' '],
			[' ', ' ', 'm'],
			[' ', ' ', '*']
		]

		expect(canMouseEat("down", room)).toBe(true)
	})

	it("Should be able to analyze correctly left and right", () => {
		const room2 = [
			['*', ' ', ' ', ' '],
			[' ', 'm', '*', ' '],
			[' ', ' ', ' ', ' '],
			[' ', ' ', ' ', '*']
		]

		expect(canMouseEat("right", room2)).toBe(true)
	})
})