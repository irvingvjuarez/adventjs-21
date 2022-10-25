import { describe, expect, it } from "vitest";

const pangram = (letter) => {
	if (!letter || typeof letter !== "string") throw new Error()
}

describe("pangram tests", () => {
	// it("pangram should be a function", () => {
	// 	expect(pangram).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => pangram()).toThrow()
	// })

	it("Should throw error if the parameter is not a string", () => {
		expect(() => pangram(Number)).toThrow()
		expect(() => pangram(Boolean)).toThrow()
		expect(() => pangram(Function)).toThrow()
		expect(() => pangram(Object)).toThrow()
		expect(() => pangram(Array)).toThrow()
	})
})