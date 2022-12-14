import { describe, it, expect } from "vitest"
import { createTree } from "./createTree"

describe("Create Xmas Tree tests", () => {
	// it("Function createTree must be a function", () => {
	// 	expect(createTree).toBeTypeOf("function")
	// })

	it("Should receive a parameter", () => {
		expect(() => createTree()).toThrow()
	})

	it("Should receive a number as parameter", () => {
		expect(() => createTree(String)).toThrow()
		expect(() => createTree(Object)).toThrow()
		expect(() => createTree(Boolean)).toThrow()
		expect(() => createTree(Array)).toThrow()
		expect(() => createTree(undefined)).toThrow()
	})

	it("Should receive as parameter an integer from 1 to 100", () => {
		expect(() => createTree(0)).toThrow()
		expect(() => createTree(101)).toThrow()
	})

	it("Should return a string as result", () => {
		expect(createTree(5)).toBeTypeOf("string")
	})

	// it("Should return an specific number of astheriscs as the base of the tree, depending on the parameter provided", () => {
	// 	// Returning only the number
	// 	// of astherics at the base of the tree
	// 	expect(createTree(1)).toBe("1")
	// 	expect(createTree(2)).toBe("3")
	// 	expect(createTree(3)).toBe("5")
	// 	expect(createTree(5)).toBe("9")
	// })

	// it("Should return the correct quantity of _ between the astherics at the top of the three", () => {
	// 	expect(createTree(1)).toBe("0")
	// 	expect(createTree(2)).toBe("1")
	// 	expect(createTree(3)).toBe("2")
	// 	expect(createTree(5)).toBe("4")
	// })

	// it("Should return the correct body of the tree", () => {
	// 	expect(createTree(1)).toBe(`*\n`)
	// 	expect(createTree(2)).toBe(`_*_\n***\n`)
	// 	expect(createTree(3)).toBe(`__*__\n_***_\n*****\n`)
	// })

	it("Should return the correct body of the tree plus the base of it", () => {
		expect(createTree(1)).toBe(`*\n#\n#`)
		expect(createTree(2)).toBe(`_*_\n***\n_#_\n_#_`)
		expect(createTree(3)).toBe(`__*__\n_***_\n*****\n__#__\n__#__`)
	})
})

