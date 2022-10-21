export const countPackages = (carriers, carrierID) => {
	if (!carriers || !Array.isArray(carriers)) throw new Error()
	if (!carrierID || typeof carrierID !== "string") throw new Error()

	const IdArr = carriers.find(carrier => carrier[0] === carrierID)
	if (!IdArr) return 0

	let packages = 0
	const plusPackages = IdArr[1]
	const subCarriers = IdArr[2]

	packages += plusPackages

	subCarriers.forEach(employee => {
		packages += countPackages(carriers, employee)
	})

	return packages
}