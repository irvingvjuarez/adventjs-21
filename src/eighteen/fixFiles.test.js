import { describe, expect, it } from "vitest";

const fixFiles = (files) => {
	if (!files || !Array.isArray(files)) throw new Error()
}

describe("fixFiles tests", () => {
	it("fixFiles should be a function", () => {
		expect(fixFiles).toBeTypeOf("function")
	})

	it("Should throw error if no parameters passed", () => {
		expect(() => fixFiles()).toThrow()
	})

	it("Should throw error if the parameter passed is not an array", () => {
		expect(() => fixFiles(String)).toThrow()
		expect(() => fixFiles(Number)).toThrow()
		expect(() => fixFiles(Function)).toThrow()
		expect(() => fixFiles(Object)).toThrow()
		expect(() => fixFiles(Boolean)).toThrow()
	})
})