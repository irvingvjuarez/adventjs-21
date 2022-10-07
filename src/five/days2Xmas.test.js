import { describe, expect, it } from "vitest";
import { days2Xmas } from "./days2Xmas"

describe("Fifth algorithm challenge test", () => {
	// it("days2Xmas should be a function", () => {
	// 	expect(days2Xmas).toBeTypeOf("function")
	// })

	it("Should receive a parameter", () => {
		expect(() => days2Xmas()).toThrow()
	})

	it("The parameter should be of type Date", () => {
		expect(() => days2Xmas(Number)).toThrow()
		expect(() => days2Xmas(String)).toThrow()
		expect(() => days2Xmas(undefined)).toThrow()
		expect(() => days2Xmas(Array)).toThrow()
	})

	it("Should return an integer", () => {
		const fecha = new Date("Dec 24, 2021")
		expect(days2Xmas(fecha)).toBeTypeOf("number")
	})

	it("Should return the days reamining to be Dec 25, 2021", () => {
		expect(days2Xmas(new Date("Dec 25, 2021"))).toBe(0)
		expect(days2Xmas(new Date("Dec 1, 2021"))).toBe(24)
		expect(days2Xmas(new Date("Dec 24, 2021 00:00:01"))).toBe(1)
		expect(days2Xmas(new Date("Dec 24, 2021 23:59:59"))).toBe(1)
		expect(days2Xmas(new Date("December 20, 2021 03:24:00"))).toBe(5)
	})

	it("Should return a negative value if it's a future date: after Dec 25", () => {
		expect(days2Xmas(new Date("Dec 26, 2021"))).toBe(-1)
		expect(days2Xmas(new Date("Dec 31, 2021"))).toBe(-6)
		expect(days2Xmas(new Date("Jan 1, 2022 00:00:01"))).toBe(-7)
		expect(days2Xmas(new Date("Jan 1, 2022 23:59:59"))).toBe(-7)
	})
})