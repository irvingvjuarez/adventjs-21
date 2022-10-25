import { describe, expect, it } from "vitest";
import { pangram } from "./pangram"

describe("pangram tests", () => {
	// it("pangram should be a function", () => {
	// 	expect(pangram).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => pangram()).toThrow()
	// })

	it("Should throw error if the parameter is not a string", () => {
		expect(() => pangram(Number)).toThrow()
		expect(() => pangram(Boolean)).toThrow()
		expect(() => pangram(Function)).toThrow()
		expect(() => pangram(Object)).toThrow()
		expect(() => pangram(Array)).toThrow()
	})

	it("Should return a boolean", () => {
		expect(pangram("a")).toBeTypeOf("boolean")
	})

	it("Should return true if the string has all the alphabet letters", () => {
		expect(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")).toBe(true)
		expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBe(true)
	})

	it("Should be able to analyze if the letter doesn't have all the alphabet letters", () => {
		expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBe(false)
		expect(pangram('De la a a la z, nos faltan letras')).toBe(false)
	})
})