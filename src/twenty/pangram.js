const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("")

export const pangram = (letter) => {
	if (!letter || typeof letter !== "string") throw new Error()

	const cleanedLetter = letter.split("")
		.filter(char => char !== " ") // remove blanks
		.map(char => char.toLowerCase()) // to lower case

	const hasAllCharacters = alphabet.every(char => cleanedLetter.includes(char))

	return hasAllCharacters
}