import { describe, expect, it } from "vitest"
import { learn } from "./learn"

describe("learn tests", () => {
	// it("learn should be a function", () => {
	// 	expect(learn).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => learn()).toThrow()
	// })

	it("Should accept the first parameter as number", () => {
		expect(() => learn(String, Array)).toThrow()
		expect(() => learn(Boolean, Array)).toThrow()
		expect(() => learn(Function, Array)).toThrow()
		expect(() => learn(Object, Array)).toThrow()
		expect(() => learn(Array, Array)).toThrow()
	})

	it("Should accept the second parameter as array", () => {
		expect(() => learn(String, String)).toThrow()
		expect(() => learn(Boolean, Number)).toThrow()
		expect(() => learn(Function, Boolean)).toThrow()
		expect(() => learn(Object, Object)).toThrow()
		expect(() => learn(Array, Function)).toThrow()
	})

	// it("Should return an array as result", () => {
	// 	expect(learn(2, [])).toBeInstanceOf(Array)
	// })

	it("Should return the indexes of the courses that will be taken", () => {
		expect(learn(10, [2, 3, 8, 1, 4])).toStrictEqual([0, 2])
	})

	it("Should be able to identify the closest number", () => {
		expect(learn(15, [2, 10, 4, 1])).toStrictEqual([1, 2])
		expect(learn(8, [8, 2, 1, 4, 3])).toStrictEqual([3, 4])
	})

	it("Should be able to get the very first solution, even though there are more solutions", () => {
		expect(learn(8, [8, 2, 1])).toStrictEqual([1, 2])
	})

	it("Should return null if there is no possible answer", () => {
		expect(learn(4, [10, 14, 20])).toBeNull()
		expect(learn(5, [5, 5, 5])).toBeNull()
	})
})