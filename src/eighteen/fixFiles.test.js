import { describe, expect, it } from "vitest";
import { fixFiles } from "./fixFiles"

describe("fixFiles tests", () => {
	// it("fixFiles should be a function", () => {
	// 	expect(fixFiles).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters passed", () => {
	// 	expect(() => fixFiles()).toThrow()
	// })

	it("Should throw error if the parameter passed is not an array", () => {
		expect(() => fixFiles(String)).toThrow()
		expect(() => fixFiles(Number)).toThrow()
		expect(() => fixFiles(Function)).toThrow()
		expect(() => fixFiles(Object)).toThrow()
		expect(() => fixFiles(Boolean)).toThrow()
	})

	it("Should return an array", () => {
		expect(fixFiles([])).toBeInstanceOf(Array)
	})

	it("Should add a postfix to the repeated files", () => {
		const files = ['photo', 'postcard', 'photo', 'photo', 'video']
		expect(fixFiles(files)).toStrictEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'])
	})

	it("Should be able to identify the files with parentheses already", () => {
		const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
		expect(fixFiles(files)).toStrictEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'])
	})
})