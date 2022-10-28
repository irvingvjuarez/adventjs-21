import { describe, expect, it } from "vitest";
import { checkIsSameTree } from "./checkIsSameTree"

describe("checkIsSameTree", () => {
	const tree = {
		value: 1,
		left: { value: 2, left: null, right: null },
		right: { value: 3, left: null, right: null }
	}

	// it("Should be a function", () => {
	// 	expect(checkIsSameTree).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => checkIsSameTree()).toThrow()
	// })

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

	it("Should return true if both trees are equal", () => {
		expect(checkIsSameTree(tree, tree)).toBe(true)
	})

	it("Should be able to notice when the trees are not the same", () => {
		const tree2 = {
			value: 1,
			left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
			right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
		}

		expect(checkIsSameTree(tree, tree2)).toBe(false)
	})
})