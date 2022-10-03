const chosenColor = "rojo"
const availableLetters = ["n", "a"]


export function countSheep(sheep) {
	if (!Array.isArray(sheep)) {
		throw new Error()
	}

	return sheep.filter(item => {
		let { name, color } = item;
		name = name.toLowerCase()
		return color === chosenColor
			&& name.includes(availableLetters[0])
			&& name.includes(availableLetters[1])
	});
}