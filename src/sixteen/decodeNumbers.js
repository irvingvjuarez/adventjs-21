const meanings = {
	".": 1,
	",": 5,
	":": 10,
	";": 50,
	"!": 100
}

export const decodeNumbers = (signs) => {
	if (!signs || typeof signs !== "string") throw new Error()

	let decoding = signs.split("").map(sign => meanings[sign])

	decoding = decoding.map((value, index) => {
		const inArrayLimit = decoding[index + 1]
		const isCurrentMinor = inArrayLimit > decoding[index]
		const isValueNegative = inArrayLimit && isCurrentMinor
		value *= isValueNegative ? -1 : 1

		return value
	})

	const sum = decoding.reduce((prev, current) => prev + current, 0)
	return sum
}