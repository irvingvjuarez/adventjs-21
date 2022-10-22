import { describe, expect, it } from "vitest"

const learn = (hrs, coursesHrs) => {
	if (!hrs || typeof hrs !== "number") throw new Error()
	if (!coursesHrs || !Array.isArray(coursesHrs)) throw new Error()
}

describe("learn tests", () => {
	it("learn should be a function", () => {
		expect(learn).toBeTypeOf("function")
	})

	it("Should throw error if no parameters provided", () => {
		expect(() => learn()).toThrow()
	})

	it("Should accept a number and an array as parameters", () => {
		const res = learn(2, [])
		expect(res).toBeUndefined()
	})
})