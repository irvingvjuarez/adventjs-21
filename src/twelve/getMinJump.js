export const getMinJump = (obstacles) => {
	if (!obstacles || !Array.isArray(obstacles)) throw new Error()

	let jump = 1
	if (obstacles.length <= 0) return jump

	const maxObstacle = Math.max(...obstacles)

	for (let i = 2; i <= maxObstacle; i++) {
		const obstaclesInJump = obstacles.filter(obstacle => obstacle % i === 0)

		if (obstaclesInJump.length === 0){
			jump = i
			break
		}
	}

	return jump
}