const increaseSort = (a, b) => {
	const tripStopA = a.position
	const tripStopB = b.position

	if (tripStopA > tripStopB) return 1
	if (tripStopA < tripStopB) return -1
	return 0
}

export const canCarry = (capacity, trip) => {
	const isInvalid = !capacity || !trip
		|| typeof capacity !== "number"
		|| !Array.isArray(trip)

	if (isInvalid)	throw new Error()

	let giftsCarried = 0
	let enoughtCapacity = true
	const tripDetail = []

	trip.forEach((route) => {
		let routeCapacity = 0

		route.forEach((station, routeIndex) => {
			const isRouteCapacity = (routeIndex === 0);

			if (isRouteCapacity) {
				routeCapacity = station
			} else {
				const isPickingGifts = (routeIndex === 1)
				const operation = (isPickingGifts) ? "+" : "-"

				tripDetail.push({
					position: station,
					quantity: `${operation} ${routeCapacity}`
				})
			}
		})
	})

	tripDetail.sort(increaseSort)

	tripDetail.forEach(stop => {
		giftsCarried = eval(giftsCarried + stop.quantity)
		if (giftsCarried > capacity) enoughtCapacity = false
	})

	return enoughtCapacity
}