export const saveCourseIdInLocalStorage = (courseId: string) => {
	localStorage.setItem('courseId', JSON.stringify(courseId))
}

export const getCourseIdInLocalStorage = (courseId: string) => {
	localStorage.getItem('courseId')
}