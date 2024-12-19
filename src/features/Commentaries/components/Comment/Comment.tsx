import css from './Comment.module.scss';

export interface ICommentProps {
	id: string;
	name: string;
	date: string;
	text: string;
}

export const Comment = (props: ICommentProps) => {
	const {name, text, date} = props;

	return (
		<div className={css.comment}>
			<div className={css.header}>
				<p className={css.commentName}>
					{name}
				</p>

				<p className={css.commentDate}>
					{date}
				</p>
			</div>

			<p className={css.text}>
				{text}
			</p>
		</div>
	)
}