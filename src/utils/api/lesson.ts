import axios from "../axios";
import {ICommentProps} from "@/features/Commentaries/components/Comment";

export const fetchLesson = (id: string) => {
	return axios.get(`/lesson/${id}`)
}

export const fetchCreateComment = (props: {lessonId: number} & ICommentProps) => {
	const {lessonId, ...data} = props;
	return axios.post(`/api/lessons/${lessonId}/comments`, data)
}

export const fetchGetComments = ({lessonId}: {lessonId: number}) => {
	return axios.get(`/api/lessons/${lessonId}/comments`)
}