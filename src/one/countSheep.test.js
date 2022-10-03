import { describe, it, expect } from "vitest";
import { countSheep } from "./countSheep"

describe("Count sheep", () => {
	// it("countSheep should be a function", () => {
	// 	expect(countSheep).toBeTypeOf("function")
	// })

	it("Should receive a parameter", () => {
		expect(() => countSheep()).toThrow()
	})

	it("Should receive an array as parameter", () => {
		expect(() => countSheep("a")).toThrow()
		expect(() => countSheep({})).toThrow()
		expect(() => countSheep(0)).toThrow()
	})

	it("Should return an array as answer", () => {
		expect(countSheep([])).toBeInstanceOf(Array)
	})

	// it("Should return an array of objects having the property color: 'rojo'", () => {
	// 	const arr = [
	// 		{color: "azul", color: "amarillo", color: "verde"}
	// 	]
	// 	expect(countSheep(arr)).toStrictEqual([])

	// 	const arr2 = [
	// 		{color: "azul", color: "amarillo", color: "verde", color: "rojo"}
	// 	]
	// 	expect(countSheep(arr2)).toStrictEqual([ {color: "rojo"} ])
	// })

	it("Should return an array of object having property color: 'rojo' and name containing letters n and a", () => {
		const arr = [
			{
				color: "azul",
				name: "jul"
			},
			{
				color: "verde",
				name: "qyo"
			},
			{
				color: "rojo",
				name: "pñlko"
			}
		]
		expect(countSheep(arr)).toStrictEqual([])

		const arr2 = [
			{
				color: "rojo",
				name: "na"
			},
			{
				color: "rojo",
				name: "pñlko"
			}
		]
		expect(countSheep(arr2)).toStrictEqual([{
			color: "rojo",
			name: "na"
		}])
	})

	it("Should return items where property name includes both letters n and a, regardless of capital letters", () => {
		const arr2 = [
			{
				color: "rojo",
				name: "NA"
			},
			{
				color: "rojo",
				name: "pñlko"
			}
		]
		expect(countSheep(arr2)).toStrictEqual([{
			color: "rojo",
			name: "NA"
		}])
	})

	it("Should contain only one letter n and one a strictly", () => {
		const arr = [
			{
				color: "rojo",
				name: "Nnnnnn"
			},
			{
				color: "rojo",
				name: "nnnnnAAAA"
			}
		]

		expect(countSheep(arr)).toStrictEqual([
			{
				color: "rojo",
				name: "nnnnnAAAA"
			}
		])
	})
	// it("Should be able to pass this exercise", () => {
	// 	const ovejas = [
	// 		{ name: 'Noa', color: 'azul' },
	// 		{ name: 'Euge', color: 'rojo' },
	// 		{ name: 'Navidad', color: 'rojo' },
	// 		{ name: 'Ki Na Ma', color: 'rojo'},
	// 		{ name: 'AAAAAaaaaa', color: 'rojo' },
	// 		{ name: 'Nnnnnnnn', color: 'rojo'}
	// 	]

	// 	expect(countSheep(ovejas)).toStrictEqual([{ name: 'Navidad', color: 'rojo' },
	// 	{ name: 'Ki Na Ma', color: 'rojo' }])
	// })
})