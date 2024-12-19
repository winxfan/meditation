import css from './Comment.module.scss';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export interface ICommentProps {
	id: string;
	name: string;
	date: string;
	text: string;
}

export const Comment = (props: ICommentProps) => {
	const {name, text, date} = props;
	const formattedDate = format(new Date(date), 'dd MMM HH:mm', { locale: ru });

	return (
		<div className={css.comment}>
			<div className={css.header}>
				<p className={css.commentName}>
					{name}
				</p>

				<p className={css.commentDate}>
					{formattedDate}
				</p>
			</div>

			<p className={css.text}>
				{text}
			</p>
		</div>
	)
}