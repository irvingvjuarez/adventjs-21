import { describe, expect, it } from "vitest"

const isLetterValid = (letter) => {
	let errMsg = ""
	if (!letter) {
		errMsg = "Expects 1 parameter, but received 0"
	} else if (typeof letter !== "string") {
		errMsg = "Parameter must be a string"
	}

	if (errMsg !== "") throw new Error(errMsg);

	const closedParenthesis = new RegExp(/\([^\{\}\[\]]+\)/gi);
	const noValidChars = new RegExp(/[\(\)\{\}\[\]]/);

	const isValid = (str) => {
		const parenthesisChecked = str.match(closedParenthesis)
		if (parenthesisChecked) {
			const subLetter = parenthesisChecked[0].split("")

			// Removing () from borders
			subLetter.shift()
			subLetter.pop()
			return isValid(subLetter.join(""))
		}

		return !noValidChars.test(str)
	}

	return isValid(letter)
}

describe("Is letter valid test", () => {
	// it("isLetterValid must be a function", () => {
	// 	expect(isLetterValid).toBeTypeOf("function")
	// })

	it("Should an argument", () => {
		expect(() => isLetterValid()).toThrow("Expects 1 parameter, but received 0")
	})

	it("Should receive a string as parameter", () => {
		expect(() => isLetterValid(Number)).toThrow("Parameter must be a string")
		expect(() => isLetterValid(Boolean)).toThrow("Parameter must be a string")
		expect(() => isLetterValid(Object)).toThrow("Parameter must be a string")
		expect(() => isLetterValid(Array)).toThrow("Parameter must be a string")
	})

	it("Should return a boolean", () => {
		expect(isLetterValid("a")).toBeTypeOf("boolean")
	})

	// it("Should accept string with parentheses correctly closed", () => {
	// 	expect(isLetterValid("word1 (")).toBe(false)
	// 	expect(isLetterValid("word2 )")).toBe(false)
	// })

	it("Should not contain empty parenthesis", () => {
		expect(isLetterValid("word1 ()")).toBe(false)
	})

	it("Parenthesis should not contain brackets or curly braces", () => {
		expect(isLetterValid("word1 ( [)")).toBe(false)
		expect(isLetterValid("word2 ( {)")).toBe(false)
	})

	it("Must accept utf-8 characters", () => {
		expect(isLetterValid("word1 (ñ)")).toBe(true)
		expect(isLetterValid("word2 (ó)")).toBe(true)
	})

	it("Must return false in prentheses within parentheses: (())", () => {
		expect(isLetterValid("word1 (())")).toBe(false)
	})

	it("Should return false for this case", () => {
		expect(isLetterValid("(a() bici (a)")).toBe(false)
	})

	it("Should pass the following case", () => {
		expect(isLetterValid("(a) (b) (c)")).toBe(true)
	})

	// it("Should pass the following use cases", () => {
	// 	expect(isLetterValid("bici coche (balón bici coche")).toBe(false)
	// 	expect(isLetterValid("peluche (bici [coche) bici coche balón")).toBe(false)
	// 	expect(isLetterValid("(peluche {) bici")).toBe(false)
	// 	expect(isLetterValid("() bici")).toBe(false)
	// })
})