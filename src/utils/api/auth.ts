import axios from "../axios";
import {UserAuthParams} from "@/store/user/userSlice";

const API_URL = 'https://lk.clubmeditation.ru/pl/api';
const API_TOKEN = '6AJlTmuQlF56nhsLgqvinZuR0Bo3lmcsOvpp4zbtPpcYWJaegbwwlroAjIZITUlfzOWaWR58KJG8s6q4onv8rd0JBH2aZ1nwZCHtEPbZwDdf3AmWiNaV4ACGquyqGKiR'

export async function getUser(email: string) {
	try {
		const response = await axios.get(`/api/getUser`, {
			params: {
				email: email,
			},
		});

		if (response.data.success) {
			console.log('Данные пользователя:', response.data.result);
		} else {
			console.error('Ошибка:', response.data.error_message);
		}

		return response;
	} catch (error) {
		console.error('Ошибка API:', error.response.data);
	}
}

export interface ApiNextLessonParams {
	courseId: string,
	lessonId: string
}

export const fetchNextLesson = (props: ApiNextLessonParams) => {
	const {courseId, lessonId} = props;

	return axios.post(`/user/${courseId}/action/nextLesson`, {
		lessonId
	});
}
