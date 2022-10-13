import { describe, expect, it } from "vitest";

const groupBy = (items, separatedBy) => {
	const invalidRequest = !items
		|| !separatedBy
		|| !Array.isArray(items)
		|| (separatedBy instanceof Function === false && typeof separatedBy !== "string")

	if (invalidRequest) throw new Error()

	const groupedValues = {}

	if (typeof separatedBy === "string") {
		// property scenario
		let differentProps = items.map(item => item[separatedBy])
		differentProps = [...new Set(differentProps)]
		differentProps.forEach(prop => {
			groupedValues[prop] = items.filter(item => item[separatedBy] === prop)
		})
	} else {
		// function scenario
		let differentProps = items.map(item => separatedBy(item))
		differentProps = [...new Set(differentProps)]
		differentProps.forEach(prop => {
			groupedValues[prop] = items.filter(item => separatedBy(item) === prop)
		})
	}

	return groupedValues
}

describe("groupBy algorithm test", () => {
	// it("groupBy should be a Function", () => {
	// 	expect(groupBy).toBeTypeOf("function")
	// })

	// it("Should throw error if it doesn't receive any parameter", () => {
	// 	expect(() => groupBy()).toThrow()
	// })

	it("Should receive first parameter as array and second as string or object", () => {
		expect(() => groupBy(Array, Number)).toThrow()
		expect(() => groupBy(Array, Array)).toThrow()
		expect(() => groupBy(Array, null)).toThrow()

		expect(() => groupBy(Number, String || Function)).toThrow()
		expect(() => groupBy(String, String || Function)).toThrow()
		expect(() => groupBy(Object, String || Function)).toThrow()
		expect(() => groupBy(null, String || Function)).toThrow()
	})

	it("Should return an object", () => {
		expect(groupBy([], Math.ceil)).toBeTypeOf("object")
	})

	it("Should determine the length of each word and separate by that", () => {
		expect(groupBy(["one", "two", "three"], "length")).toStrictEqual({
			3: ["one", "two"],
			5: ["three"]
		})
	})

	it("Should group the items according to the function passed as parameter", () => {
		expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({
			6: [6.1, 6.3], 4: [4.2]
		})
	})
})