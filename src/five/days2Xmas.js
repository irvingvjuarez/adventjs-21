const targetDate = new Date("Dec 25, 2021")

export const days2Xmas = (date) => {
	if (!date || date instanceof Date === false) throw new Error()

	const currentDate = new Date(date)

	const remainingSeconds = (targetDate - currentDate) / 1000
	const remainingHours = (remainingSeconds / 60) / 60
	const remainingDays = Math.ceil(remainingHours / 24)

	return remainingDays
}