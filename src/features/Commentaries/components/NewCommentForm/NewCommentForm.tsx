import css from './NewCommentForm.module.scss';
import { Input } from 'antd';
import {useEffect, useState} from "react";
import {useTelegram} from "@/utils/hooks/useTelegram";
import {useDispatch} from "react-redux";
import {createComment} from "@/store/lesson/lessonSlice";
import {useAppSelector} from "@/utils/hooks/redux";
import {LoadingStatus} from "@/constants";

const { TextArea } = Input;

export const NewCommentForm = ({lessonId}: {lessonId: number}) => {
	const [commentText, setCommentText] = useState('');
	const { initDataUnsafe, WebAppUser } = useTelegram();
	const dispatch = useDispatch();
	const createCommentData = useAppSelector((store) => store.lesson.createCommentData);
	const createCommentStatus = useAppSelector((store) => store.lesson.createCommentStatus);

	const firstName = initDataUnsafe?.user?.first_name || 'Anon';
	const userName = initDataUnsafe?.user?.username || 'anon';

	const onChangeValue = (value: string) => {
		setCommentText(value)
	}

	const onCreateComment = () => {
		if (!firstName || !commentText) return;

		// @ts-ignore
		dispatch(createComment({
			lessonId,
			name: firstName,
			text: commentText,
		}))
	}

	useEffect(() => {
		if (createCommentStatus === LoadingStatus.none) {
			setCommentText('')
		}
	}, [createCommentStatus])

	if (!lessonId || !userName) {
		return (
			<div className={css.warning}>
				Комментарии могут оставлять только зарегистрированные пользователи
			</div>
		)
	}

	return (
		<div className={css.container}>
			<p className={css.title}>
				Ваш комментарий
			</p>

			<TextArea
				placeholder="Введите Ваш комментарий здесь..."
				autoSize={{ minRows: 10 }}
				className={css.textArea}
				value={commentText}
				onChange={(e) => onChangeValue(e.target.value)}
			/>

			<button
				className={css.submitBtn}
				onClick={onCreateComment}
			>
				Отправить
			</button>
		</div>
	)
}