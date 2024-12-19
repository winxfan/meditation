import css from './NewCommentForm.module.scss';
import { Input } from 'antd';
import {useState} from "react";
import {useTelegram} from "@/utils/hooks/useTelegram";
import {useDispatch} from "react-redux";
import {createComment} from "@/store/lesson/lessonSlice";

const { TextArea } = Input;

export const NewCommentForm = ({lessonId}: {lessonId: number}) => {
	const [commentText, setCommentText] = useState('');
	const { initDataUnsafe, WebAppUser } = useTelegram();
	const dispatch = useDispatch();

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