import css from './NewCommentForm.module.scss';
import {Input, Modal} from 'antd';
import React, {useEffect, useState} from "react";
import {useTelegram} from "@/utils/hooks/useTelegram";
import {useDispatch} from "react-redux";
import {createComment, resetCreateCommentStatus} from "@/store/lesson/lessonSlice";
import {useAppSelector} from "@/utils/hooks/redux";
import {LoadingStatus} from "@/constants";
import OkIcon from '@/assets/icons/ok.svg'
import ErrorIcon from '@/assets/icons/error.svg'

const { TextArea } = Input;

export const NewCommentForm = ({lessonId}: {lessonId: number}) => {
	const [commentText, setCommentText] = useState('');
	const { initDataUnsafe, WebAppUser } = useTelegram();
	const dispatch = useDispatch();
	const createCommentData = useAppSelector((store) => store.lesson.createCommentData);
	const createCommentStatus = useAppSelector((store) => store.lesson.createCommentStatus);
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		if (createCommentStatus === LoadingStatus.success) {
			setCommentText('')
		}

		if (createCommentStatus === LoadingStatus.success || createCommentStatus === LoadingStatus.error) {
			setIsModalOpen(true)
		}
	}, [createCommentStatus])

	if (!lessonId || !userName) {
		return (
			<div className={css.warning}>
				Комментарии могут оставлять только зарегистрированные пользователи
			</div>
		)
	}

	useEffect(() => {
		return () => {
			dispatch(resetCreateCommentStatus())
		}
	}, []);

	const handleCancel = () => {
		setIsModalOpen(false);
		dispatch(resetCreateCommentStatus())
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

			<Modal
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
			>
				{createCommentStatus === LoadingStatus.success && (
					<div className={css.modalContent}>
						<OkIcon className={css.modalIcon} />

						<p className={css.modalTitle}>
							Спасибо!
						</p>

						<p className={css.modalDescription}>
							Комментарий успешно отправлен
						</p>
					</div>
				)}

				{createCommentStatus === LoadingStatus.error && (
					<div className={css.modalContent}>
						<ErrorIcon className={css.modalIcon} />

						<p className={css.modalTitle}>
							Ошибка
						</p>

						<p className={css.modalDescription}>
							Попробуйте еще раз
						</p>
					</div>
				)}
			</Modal>
		</div>
	)
}