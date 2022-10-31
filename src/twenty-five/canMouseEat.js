const getDirectionContent = (game, x, y) => {
	return game?.[y]?.[x]
}

export const canMouseEat = (direction, game) => {
	const isInvalid = !direction || typeof direction !== "string"
		|| !game || Array.isArray(game) === false

	if (isInvalid) throw new Error()

	let x, y, directionContent
	let isFood = false

	game.forEach((row, rowIndex) => {
		row.forEach((cell, cellIndex) => {
			if(cell.trim() === "m") {
				x = cellIndex,
				y = rowIndex
			}
		})
	})

	switch (direction) {
		case "up":
			directionContent = getDirectionContent(game, x, y - 1)
		break;
		case "down":
			directionContent = getDirectionContent(game, x, y + 1)
		break;
		case "left":
			directionContent = getDirectionContent(game, x - 1, y)
		break;
		default: // right
			directionContent = getDirectionContent(game, x + 1, y)
	}

	if (directionContent === "*") isFood = true

	return isFood
}