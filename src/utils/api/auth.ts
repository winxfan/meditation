import axios from "../axios";
import {UserAuthParams} from "@/store/user/userSlice";

export const fetchAuth = ({data, courseId}: UserAuthParams) => {
	return axios.post(`app/user/auth/${courseId}`, data);
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
