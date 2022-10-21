import { describe, expect, it } from "vitest";

const fixFiles = (files) => {
	if (!files || !Array.isArray(files)) throw new Error()

	const indexes = {}
	const newFiles = files.map(file => {
		if (file in indexes) {
			const currentCount = indexes[file]
			indexes[file] += 1
			return `${file}(${currentCount + 1})`
		} else {
			indexes[file] = 0
			return file
		}
	})

	return newFiles
}

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
})