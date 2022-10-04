export const listGifts = (letter) => {
	let errorMsg = ""
	if (!letter) {
		errorMsg = "A parameter must be passed"
	} else if (typeof letter !== "string") {
		errorMsg = "A string should be passed as parameter"
	}

	if (errorMsg !== "") throw new Error(errorMsg)

	const res = {}

	letter = letter.split(" ")
		.filter(item => item !== "")
		.map(item => item.trim())

	const uniqueValues = [...new Set(letter)]

	uniqueValues.forEach(value => {
		if (value.charAt(0) !== "_") {
			const size = letter.filter(item => item == value).length
			res[value] = size
		}
	})

	return res
}