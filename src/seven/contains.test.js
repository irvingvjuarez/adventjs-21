import { describe, expect, it } from "vitest";

const contains = (stock, target) => {
	if (!stock || !target) throw new Error()
	if (stock instanceof Object === false || typeof target !== "string") throw new Error()

	const entries = Object.entries(stock)
	for(let entry of entries) {
		const evaluated = entry[1]

		if (evaluated instanceof Object) {
			const subEntryResult = contains(evaluated, target)
			if (subEntryResult) return true
		} else if (typeof evaluated === "string"){
			if (evaluated === target) return true
		}
	}

	return false
}

describe("Seventh exercise test", () => {
	// it("contains should be a function datatype", () => {
	// 	expect(contains).toBeTypeOf("function")
	// })

	// it("The function must receive two parameters", () => {
	// 	expect(() => contains()).toThrow()
	// 	expect(() => contains(Object)).toThrow()
	// })

	it("First component should be an object and Second a string", () => {
		expect(() => contains(Object, Number)).toThrow()
		expect(() => contains(Object, Array)).toThrow()
		expect(() => contains(Object, Object)).toThrow()
		expect(() => contains(String, Object)).toThrow()
		expect(() => contains(String, Number)).toThrow()
		expect(() => contains(String, Array)).toThrow()
		expect(() => contains(String, String)).toThrow()
	})

	it("It should return a boolean", () => {
		expect(contains({}, "a")).toBeTypeOf("boolean")
	})

	it("Should evaluate the input and return if the object has the target", () => {
		const obj1 = {
			'producto': 'cd-rom',
			'producto2': 'disquette',
			'producto3': 'mando'
		}

		expect(contains(obj1, "mando")).toBe(true)
	})

	// it("Should be evaluate deeper levels of the object in search of the target", () => {
	// 	const obj = {
	// 		'baul': {
	// 			'fondo': {
	// 				'producto': 'cd-rom',
	// 				'producto2': 'disquette',
	// 				'producto3': 'mando'
	// 			}
	// 		}
	// 	}

	// 	expect(contains(obj, "disquette")).toBe(true)
	// })
})