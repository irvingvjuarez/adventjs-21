export const missingReindeer = (reindeer) => {
	if (!reindeer || !Array.isArray(reindeer)) throw new Error()

	let missingId = null

  reindeer.sort().every((id, index) => {
		if (id !== index) {
			missingId = index
			return false
		}
		return true
	})

  return missingId !== null ? missingId : reindeer.length
}