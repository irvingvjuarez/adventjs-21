const courses2Skip = 1

export const learn = (availableTime, courses) => {
	if (!availableTime || typeof availableTime !== "number") throw new Error()
	if (!courses || !Array.isArray(courses)) throw new Error()

	let courses2Take = [];
  let estimatedTime = 0;

  courses.forEach((firstCourse, firstIndex) => {
		const exceptCurrentCourse = courses.slice(firstIndex + courses2Skip)

    exceptCurrentCourse.forEach((secondCourse, secondIndex) => {
			const bothCoursesSum = firstCourse + secondCourse
			const isSumInRangeTime = bothCoursesSum <= availableTime
			const isSumCloserToAvailableTime = bothCoursesSum > estimatedTime

      if (isSumInRangeTime && isSumCloserToAvailableTime) {
				const secondCourseIndex = secondIndex + firstIndex + 1
        estimatedTime = firstCourse + secondCourse;
        courses2Take = [firstIndex, secondCourseIndex];
      }
    });
  });

	const isEnoughTime = courses2Take.length > 0

  return isEnoughTime ? courses2Take : null;
}