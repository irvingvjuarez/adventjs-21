import { describe, expect, it } from "vitest";

const canCarry = (capacity, trip) => {
	const isInvalid = !capacity || !trip
		|| typeof capacity !== "number"
		|| !Array.isArray(trip)

	if (isInvalid)	throw new Error()

	return false
}

describe("can carry tests", () => {
	// it("canCarry should be a function", () => {
	// 	expect(canCarry).toBeTypeOf("function")
	// })

	// it("Should throw error if no params passed", () => {
	// 	expect(() => canCarry()).toThrow()
	// })

	it("Should accept two parameters, the first should be a number", () => {
		expect(() => canCarry(String, Array)).toThrow()
		expect(() => canCarry(Boolean, Array)).toThrow()
		expect(() => canCarry(Function, Array)).toThrow()
		expect(() => canCarry(Object, Array)).toThrow()
		expect(() => canCarry(Array, Array)).toThrow()
	})

	it("Should accept two parameters, the second should be an array", () => {
		expect(() => canCarry(Number, String)).toThrow()
		expect(() => canCarry(Number, Number)).toThrow()
		expect(() => canCarry(Number, Boolean)).toThrow()
		expect(() => canCarry(Number, Function)).toThrow()
		expect(() => canCarry(Number, Object)).toThrow()
	})

	it("Should return a boolean", () => {
		expect(canCarry(2, [])).toBeTypeOf("boolean")
	})
})