import {DEFAULT_COURSE_ID} from "@/store/user/data";

interface UseGeneratePathParams {
	courseId: string;
}

export const useGeneratePath = (props: UseGeneratePathParams) => {
	const {courseId = DEFAULT_COURSE_ID} = props;

	return ({ moduleId, lessonId}: {	moduleId?: string | number; lessonId?: string | number;}) => ({
		main: `/${courseId}`,
		module: `/${courseId}/module/${moduleId}`,
		lesson: `/${courseId}/lesson/${lessonId}`,
		finish: `/${courseId}/finish`,
	})
}