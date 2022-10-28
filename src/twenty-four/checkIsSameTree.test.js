import { describe, expect, it } from "vitest";

const sortObj = (obj) => {
	if (typeof obj === "object") {
		const right = obj?.right;
		const left = obj?.left
		const value = obj?.value

		let rightCopy = right
		let leftCopy = left

		if (right instanceof Object) rightCopy = sortObj(right)

		if (left instanceof Object) leftCopy = sortObj(left)

		return {
			value,
			right: rightCopy,
			left: leftCopy
		}

	} else {
		return obj
	}
}

const checkIsSameTree = (treeA, treeB) => {
	const isInvalid = !treeA || typeof treeA !== "object"
		|| treeA instanceof Object === false
		|| !treeB || typeof treeB !== "object"
		|| treeB instanceof Object === false
	if (isInvalid) throw new Error()

	treeA = sortObj(treeA)
	treeB = sortObj(treeB)

	const strA = JSON.stringify(treeA)
	const strB = JSON.stringify(treeB)

	const areEqual = strA === strB;

	return areEqual
}

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