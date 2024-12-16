import axios from "../axios";

export const fetchCourse = (id: string) => {
	return axios.get(`/app/course/${id}`)
}

export const fetchModules = (id: string) => {
	return axios.get(`/module/${id}/all`)
}