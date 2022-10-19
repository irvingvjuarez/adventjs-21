import { describe, expect, it } from "vitest";

const checkSledJump = (jumps) => {
	if (!jumps || !Array.isArray(jumps)) throw new Error()

	const { length } = jumps
	if (length < 3) return false

	let currentDirection = "increasing"
	const directions = [currentDirection]

	for (let i = 0; i < length; i++) {
		if (i > 0) {
			if (jumps[i - 1] < jumps[i]) { // increasing
				if (currentDirection !== "increasing") {
					currentDirection = "increasing"
					directions.push(currentDirection)
				}
			} else if (jumps[i - 1] > jumps[i]) { // decreasing
				if (currentDirection !== "decreasing") {
					currentDirection = "decreasing"
					directions.push(currentDirection)
				}
			} else { // equal
				return false
			}
		}
	}

	const incTimes = directions.filter(dir => dir === "increasing").length
	const decTimes = directions.filter(dir => dir === "decreasing").length

	return incTimes === 1 && decTimes === 1
}

describe("checkSledJump tests", () => {
	// it("checkSledJump should be a function", () => {
	// 	expect(checkSledJump).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameter provided", () => {
	// 	expect(() => checkSledJump()).toThrow()
	// })

	it("Should throw if the parameter is not an array", () => {
		expect(() => checkSledJump(Number)).toThrow()
		expect(() => checkSledJump(String)).toThrow()
		expect(() => checkSledJump(Boolean)).toThrow()
		expect(() => checkSledJump(Object)).toThrow()
		expect(() => checkSledJump(Function)).toThrow()
	})

	it("Should accept only arrays with at least 3 elements", () => {
		expect(checkSledJump([])).toBe(false)
		expect(checkSledJump([1])).toBe(false)
		expect(checkSledJump([1,2])).toBe(false)
	})

	it("Should return a boolean", () => {
		expect(checkSledJump([1,2,3])).toBeTypeOf("boolean")
	})

	it("Should be able to analyze if the array form an curve", () => {
		expect(checkSledJump([0,1,0])).toBe(true)
		expect(checkSledJump([1,2,3,2,1])).toBe(true)
	})

	it("Should be able to analyze if the curve only increased but never decreased", () => {
		expect(checkSledJump([1, 2, 3])).toBe(false)
	})

	it("Should be able to analyze if it increases or decreases more than once (if it resembles a roller coaster)", () => {
		expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
	})
})