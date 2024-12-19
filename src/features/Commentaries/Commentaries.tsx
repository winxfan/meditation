import {NewCommentForm} from "@/features/Commentaries/components/NewCommentForm";
import {AllComments} from "@/features/Commentaries/components/AllComments";
import {useAppSelector} from "@/utils/hooks/redux";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getComments} from "@/store/lesson/lessonSlice";


interface CommentariesProps {
	lessonId: number;
}

export const Commentaries = ({lessonId}: CommentariesProps) => {
	const dispatch = useDispatch();

	const commentsData = useAppSelector((store) => store.lesson.getCommentsData);
	const commentsStatus = useAppSelector((store) => store.lesson.getCommentsStatus);

	useEffect(() => {
		// @ts-ignore
		dispatch(getComments({lessonId}))
	}, [lessonId])

	return (
		<div>
			<NewCommentForm lessonId={lessonId}/>
			<AllComments data={commentsData} />
		</div>
	)
}