import { describe, it, expect } from "vitest";

const countDecorations = (tree) => {
	// const isInvalid = !tree
	// 	|| tree instanceof Object === false
	// 	|| typeof tree !== "object"

	// if (isInvalid) throw new Error()
	let decorations = 0
	if (!tree) return decorations

	const branchesNames = Object.keys(tree)

	for(let branchName of branchesNames) {
		const branchValue = tree[branchName]
		if (typeof branchValue === "number") {
			decorations += branchValue
		} else {
			decorations += countDecorations(branchValue)
		}
	}

	return decorations
}

describe("countDecorations", () => {
	// it("Should be a function", () => {
	// 	expect(countDecorations).toBeTypeOf("function")
	// })

	// it("Should return error if no parameters provided", () => {
	// 	expect(() => countDecorations()).toThrow()
	// })

	// it("Should throw error if the first and only parameter is not and object", () => {
	// 	expect(() => countDecorations(String)).toThrow()
	// 	expect(() => countDecorations(Number)).toThrow()
	// 	expect(() => countDecorations(Boolean)).toThrow()
	// 	expect(() => countDecorations(Function)).toThrow()
	// 	expect(() => countDecorations(Array)).toThrow()
	// })

	it("Should return a number", () => {
		expect(countDecorations({})).toBeTypeOf("number")
	})

	it("Should resolve the following exercises correctly", () => {
		const tree = {
			value: 1,
			left: { value: 2, left: null, right: null },
			right: { value: 3, left: null, right: null }
		}
		expect(countDecorations(tree)).toBe(6)
	})
})