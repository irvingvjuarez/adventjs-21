import { describe, expect, it } from "vitest"

const learn = (hrs, coursesHrs) => {
	if (!hrs || typeof hrs !== "number") throw new Error()
	if (!coursesHrs || !Array.isArray(coursesHrs)) throw new Error()

	let courses2Take = []

	coursesHrs.forEach((course, index) => {
		const subCoursesHrs = [...coursesHrs]
		subCoursesHrs.splice(index)
		subCoursesHrs.forEach(subCourse => {
			if (subCourse + course === hrs) courses2Take.push(course, subCourse)
		})
	})

	courses2Take = courses2Take.map(course => coursesHrs.findIndex(courseHr => courseHr === course)).sort()

	return courses2Take
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