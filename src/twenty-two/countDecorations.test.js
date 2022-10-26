import { describe, it, expect } from "vitest";

const countDecorations = (tree) => {
	const isInvalid = !tree
		|| tree instanceof Object === false
		|| typeof tree !== "object"

	if (isInvalid) throw new Error()

	return 0
}

describe("countDecorations", () => {
	it("Should be a function", () => {
		expect(countDecorations).toBeTypeOf("function")
	})

	it("Should return error if no parameters provided", () => {
		expect(() => countDecorations()).toThrow()
	})

	it("Should throw error if the first and only parameter is not and object", () => {
		expect(() => countDecorations(String)).toThrow()
		expect(() => countDecorations(Number)).toThrow()
		expect(() => countDecorations(Boolean)).toThrow()
		expect(() => countDecorations(Function)).toThrow()
		expect(() => countDecorations(Array)).toThrow()
	})

	it("Should return a number", () => {
		expect(countDecorations({})).toBeTypeOf("number")
	})
})