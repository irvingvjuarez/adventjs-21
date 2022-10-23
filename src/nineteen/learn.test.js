import { describe, expect, it } from "vitest"

const learn = (hrs, coursesHrs) => {
	if (!hrs || typeof hrs !== "number") throw new Error()
	if (!coursesHrs || !Array.isArray(coursesHrs)) throw new Error()

	const arrSize = coursesHrs.length - 1
	let sortedCoursesHrs = [...coursesHrs]
	sortedCoursesHrs = sortedCoursesHrs.sort()
	let res = []

	for(let i = arrSize; i >= 0; i--) {
		const currentEl = sortedCoursesHrs[i]
		if (res.length === 0) {
			if (currentEl < hrs) res.push(currentEl)
		} else if (res.length === 1) {
			const firstResEl = res[0]
			if ((currentEl + firstResEl) === hrs) res.push(currentEl)
		}
	}

	res = res.sort().map(item => {
		const index = coursesHrs.findIndex(hour => hour === item)
		return index
	})

	console.log({
		res
	})

	return res
}

describe("learn tests", () => {
	// it("learn should be a function", () => {
	// 	expect(learn).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => learn()).toThrow()
	// })

	it("Should accept the first parameter as number", () => {
		expect(() => learn(String, Array)).toThrow()
		expect(() => learn(Boolean, Array)).toThrow()
		expect(() => learn(Function, Array)).toThrow()
		expect(() => learn(Object, Array)).toThrow()
		expect(() => learn(Array, Array)).toThrow()
	})

	it("Should accept the second parameter as array", () => {
		expect(() => learn(String, String)).toThrow()
		expect(() => learn(Boolean, Number)).toThrow()
		expect(() => learn(Function, Boolean)).toThrow()
		expect(() => learn(Object, Object)).toThrow()
		expect(() => learn(Array, Function)).toThrow()
	})

	it("Should return an array as result", () => {
		expect(learn(2, [])).toBeInstanceOf(Array)
	})

	it("Should return the indexes of the courses that will be taken", () => {
		expect(learn(10, [2, 3, 8, 1, 4])).toStrictEqual([0, 2])
	})
})