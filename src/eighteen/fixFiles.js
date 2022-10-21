export const fixFiles = (files) => {
	if (!files || !Array.isArray(files)) throw new Error()

	const indexes = {}
	const newFiles = files.map(file => {
		let newFile = file
		let newIndexValue = 0

		if (file in indexes) {
			const currentCount = indexes[file]
			newFile = `${file}(${currentCount + 1})`
			newIndexValue = indexes[file] + 1
		}

		indexes[file] = newIndexValue
		return newFile
	})

	return newFiles
}