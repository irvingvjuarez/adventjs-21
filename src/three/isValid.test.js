import { describe, expect, it } from "vitest"
import { isValid } from "./isValid"

describe("Third exercise tests", () => {
	// it("isValid should be a function", () => {
	// 	expect(isValid).toBeTypeOf("function")
	// })

	it("Should have a parameter", () => {
		expect(() => isValid()).toThrow()
	})

	it("Should receive a string as parameter", () => {
		expect(() => isValid(Number)).toThrow()
		expect(() => isValid(Boolean)).toThrow()
		expect(() => isValid(Object)).toThrow()
		expect(() => isValid(Array)).toThrow()
	})

	it("Should return a boolean as parameter", () => {
		expect(isValid("a")).toBeTypeOf("boolean")
	})

	// it("Supossed to contain closed parenthesis - (). In the string passed as parameter", () => {
	// 	const letter = "word1 ()"
	// 	const letter2 = "word1 ("
	// 	expect(isValid(letter)).toBe(true)
	// 	expect(isValid(letter2)).toBe(false)
	// })

	it("Should return false if the closed parenthesis have these signs: [}{]", () => {
		const letter = "word (dsds) (gfts)"
		const letter2 = "word (dsdss) (sdsds})"
		expect(isValid(letter)).toBe(true)
		expect(isValid(letter2)).toBe(false)
	})

	it("Should evaluate that the closed parenthesis are not empty", () => {
		const letter = "word (a)"
		expect(isValid(letter)).toBe(true)

		const letter2 = "word ()"
		expect(isValid(letter2)).toBe(false)
	})

	it("Should pass all these test cases", () => {
		expect(isValid("bici coche (balón) bici coche peluche")).toBe(true)
		expect(isValid("(muñeca) consola bici")).toBe(true)

		expect(isValid("bici coche (balón bici coche")).toBe(false)
		expect(isValid("peluche (bici [coche) bici coche balón")).toBe(false)
		expect(isValid("(peluche {) bici")).toBe(false)
		expect(isValid("() bici")).toBe(false)
		expect(isValid("(a() bici (a)")).toBe(false)
	})
})