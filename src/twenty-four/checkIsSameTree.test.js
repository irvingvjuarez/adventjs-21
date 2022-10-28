import { describe, expect, it } from "vitest";

const checkIsSameTree = (treeA, treeB) => {
	const isInvalid = !treeA || typeof treeA !== "object"
		|| treeA instanceof Object === false
		|| !treeB || typeof treeB !== "object"
		|| treeB instanceof Object === false
	if (isInvalid) throw new Error()

	return false
}

describe("checkIsSameTree", () => {
	it("Should be a function", () => {
		expect(checkIsSameTree).toBeTypeOf("function")
	})

	it("Should throw error if no parameter provided", () => {
		expect(() => checkIsSameTree()).toThrow()
	})

	it("Should throw error if first parameter is not an object", () => {
		expect(() => checkIsSameTree(Number, Object)).toThrow()
		expect(() => checkIsSameTree(String, Object)).toThrow()
		expect(() => checkIsSameTree(Boolean, Object)).toThrow()
		expect(() => checkIsSameTree(Function, Object)).toThrow()
		expect(() => checkIsSameTree(Array, Object)).toThrow()
	})

	it("Should throw error if second parameter is not an object", () => {
		expect(() => checkIsSameTree(Object, Number)).toThrow()
		expect(() => checkIsSameTree(Object, String)).toThrow()
		expect(() => checkIsSameTree(Object, Boolean)).toThrow()
		expect(() => checkIsSameTree(Object, Function)).toThrow()
		expect(() => checkIsSameTree(Object, Array)).toThrow()
	})

	it("Should return a boolean", () => {
		expect(checkIsSameTree({}, {})).toBeTypeOf("boolean")
	})
})