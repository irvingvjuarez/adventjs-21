const INC = "increasing"
const DEC = "decreasing"

export const checkSledJump = (jumps) => {
	if (!jumps || !Array.isArray(jumps)) throw new Error()

	let currentDirection = INC
	const directions = [currentDirection]

	jumps.forEach((_jump, index) => {
		if (index > 0) {
			const current = jumps[index]
			const prev = jumps[index - 1]

			const areEqual = prev === current;
			if(areEqual) return false

			const isIncreasing = prev < current;
			const isCurrentDirINC = currentDirection === INC

			if(isIncreasing && !isCurrentDirINC) currentDirection = INC
			if(!isIncreasing && isCurrentDirINC) currentDirection = DEC

			const currentDirChanged = isCurrentDirINC !== (currentDirection === INC)
			if(currentDirChanged) directions.push(currentDirection)
		}
	})

	return directions.length < 3 && directions[0] === INC && directions[1] === DEC
}