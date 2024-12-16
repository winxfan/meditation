import axios from "../axios";
import {getTestScorePoints} from "@/store/lesson/lessonSlice";

export const fetchLesson = (id: string) => {
	return axios.get(`/lesson/${id}`)
}

export interface TestScorePointsProps {
	id: string
	data: Record<string, string | string[]>
}

export const fetchTestScorePoints = (props: TestScorePointsProps) => {
	const {id, data} = props;
	return axios.post(`/test/${id}/testScorePoints`, {data});
}
