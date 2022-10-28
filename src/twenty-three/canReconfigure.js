const getInvalid = (from, to) => {
	return !from || typeof from !== "string"
		|| !to || typeof to !== "string"
}

const getDifference = (from, to) => from.length !== to.length

const transformStr = (str) => str.toLowerCase().split("")

const getObjValidation = ({from, to, index, obj}) => {
	const fromChar = from[index]
	const toChar = to[index]

	const fromInObj = obj[fromChar]
	const toInObj = obj[toChar]

	const isNotInObj = !fromInObj && !toInObj

	const notMatch = fromInObj !== toChar || toInObj !== fromChar

	return { isNotInObj, fromChar, toChar, notMatch }
}

export const canReconfigure = (from, to) => {
	const isInvalid = getInvalid(from, to)
	if (isInvalid) throw new Error()

	const differentLength = getDifference(from, to)
	if (differentLength) return false

	const obj = {}
	from = transformStr(from)
	to = transformStr(to)

	for(let index in from) {
		const objValidationConfig = { from, to, index, obj }
		const { isNotInObj, fromChar, toChar, notMatch } = getObjValidation(objValidationConfig)

		if (isNotInObj) {
			obj[fromChar] = toChar;
			obj[toChar] = fromChar
		} else {
			if (notMatch) return false
		}
	}

	return true
}