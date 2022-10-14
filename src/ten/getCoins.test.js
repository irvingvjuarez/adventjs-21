import { describe, expect, it } from "vitest";

const getCoins = (change) => {
	if (!change || typeof change !== "number") throw new Error()

	const coinsValues = [1,2,5,10,20,50]
	const returnedCoins = [0,0,0,0,0,0]

	if (coinsValues.includes(change)) {
		const index = coinsValues.findIndex(coin => coin === change)
		returnedCoins[index] = 1
	} else {
		const plainCoinsChange = []
		while (change > 0) {
			for (let i = 5; i >= 0; i--){
				if (change - coinsValues[i] >= 0) {
					change -= coinsValues[i]
					plainCoinsChange.push(coinsValues[i])
					break
				}
			}
		}

		plainCoinsChange.forEach(value => {
			const index = coinsValues.findIndex(coin => coin === value)
			const actualVal = returnedCoins[index]
			returnedCoins[index] = actualVal + 1
		})
	}

	return returnedCoins
}

describe("getCoins tests", () => {
	// it("getCoins should be a function", () => {
	// 	expect(getCoins).toBeTypeOf("function")
	// })

	// it("Should throw error if no parameters provided", () => {
	// 	expect(() => getCoins()).toThrow()
	// })

	it("Should accept only a paremeter of type Number", () => {
		expect(() => getCoins(String)).toThrow()
		expect(() => getCoins(Boolean)).toThrow()
		expect(() => getCoins(Array)).toThrow()
		expect(() => getCoins(Object)).toThrow()
		expect(() => getCoins(Function)).toThrow()
	})

	it("Should return an array", () => {
		expect(getCoins(43)).toBeInstanceOf(Array)
	})

	it("Should return the base coin values if passed as parameters", () => {
		expect(getCoins(1)).toStrictEqual([1,0,0,0,0,0])
		expect(getCoins(2)).toStrictEqual([0,1,0,0,0,0])
		expect(getCoins(5)).toStrictEqual([0,0,1,0,0,0])
		expect(getCoins(10)).toStrictEqual([0,0,0,1,0,0])
		expect(getCoins(20)).toStrictEqual([0,0,0,0,1,0])
		expect(getCoins(50)).toStrictEqual([0,0,0,0,0,1])
	})

	it("Should de-estructure the coin values if it's not one of the coin base values", () => {
		expect(getCoins(51)).toStrictEqual([1,0,0,0,0,1])
	})

	it("Should be able to determine the same number more than once and return the respective array of values", () => {
		expect(getCoins(100)).toStrictEqual([0,0,0,0,0,2])
	})

	it("Should able to determine different coin values", () => {
		expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0])
	})
})