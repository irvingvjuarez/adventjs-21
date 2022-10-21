import { describe, expect, it } from "vitest";

const countPackages = (carriers, carrierID) => {
	if (!carriers || !Array.isArray(carriers)) throw new Error()
	if (!carrierID || typeof carrierID !== "string") throw new Error()

	let counter = 0
	if (carriers.length <= 0) return counter

	const carrierArr = carriers.find(carrier => carrier[0] === carrierID)
	const employees = carrierArr[2]

	counter += carrierArr[1]

	employees.forEach(employee => {
		counter += countPackages(carriers, employee)
	})

	return counter
}

describe("countPackages tests", () => {
	// it("countPackages should be a function", () => {
	// 	expect(countPackages).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => countPackages()).toThrow()
	// })

	it("Should throw error if only one parameter provided", () => {
		expect(() => countPackages(Array)).toThrow()
	})

	it("Should throw error if both params provided but if they are not Array, String", () => {
		expect(() => countPackages(Array, Number)).toThrow()
		expect(() => countPackages(Array, Boolean)).toThrow()
		expect(() => countPackages(Array, Array)).toThrow()
		expect(() => countPackages(Array, Function)).toThrow()
		expect(() => countPackages(Array, Object)).toThrow()
	})

	it("Should return a number", () => {
		expect(countPackages([], "a")).toBeTypeOf("number")
	})

	it("Should return 9 in the following exercise", () => {
		const carriers = [
			['dapelu', 5, ['midu', 'jelowing']],
			['midu', 2, []],
			['jelowing', 2, []]
		]
		expect(countPackages(carriers, "dapelu")).toBe(9)
	})

	it("Should be able to handle more complex and deep carriers", () => {
		const carriers2 = [
			['lolivier', 8, ['camila', 'jesuspoleo']],
			['camila', 5, ['sergiomartinez', 'conchaasensio']],
			['jesuspoleo', 4, []],
			['sergiomartinez', 4, []],
			['conchaasensio', 3, ['facundocapua', 'faviola']],
			['facundocapua', 2, []],
			['faviola', 1, []]
		]
		expect(countPackages(carriers2, "camila")).toBe(15)
	})
})