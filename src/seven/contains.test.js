import { describe, expect, it } from "vitest";
import { contains } from "./contains"

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

	it("Should be evaluate deeper levels of the object in search of the target", () => {
		const obj = {
			'baul': {
				'fondo': {
					'producto': 'cd-rom',
					'producto2': 'disquette',
					'producto3': 'mando'
				}
			}
		}

		expect(contains(obj, "disquette")).toBe(true)
	})
})