import { describe, expect, it } from "vitest";
import { getMinJump } from "./getMinJump"

describe("Twelve exercise tests", () => {
	// it("getMinJump should be a function", () => {
	// 	expect(getMinJump).toBeTypeOf("function")
	// })

	// it("Should return err if no param provided", () => {
	// 	expect(() => getMinJump()).toThrow()
	// })

	it("Should throw err if the parameter is not an array", () => {
		expect(() => getMinJump(Number)).toThrow()
		expect(() => getMinJump(String)).toThrow()
		expect(() => getMinJump(Boolean)).toThrow()
		expect(() => getMinJump(Object)).toThrow()
		expect(() => getMinJump(Function)).toThrow()
	})

	it("Should return a number", () => {
		expect(getMinJump([])).toBeTypeOf("number")
	})

	it("Should be able to solve the following obstacles", () => {
		expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
		expect(getMinJump([2, 4, 6, 8, 10])).toBe(7)
	})
})