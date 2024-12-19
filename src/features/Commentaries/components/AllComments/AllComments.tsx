import css from './AllComments.module.scss';
import {Comment, ICommentProps} from "@/features/Commentaries/components/Comment";

interface AllCommentsProps {
	data: ICommentProps[];
}

export const AllComments = ({data}: AllCommentsProps) => {
	return (
		<div className={css.container}>
			<h2 className={css.title}>
				Комментарии
				других&nbsp;участников
			</h2>

			<div className={css.comments}>
				{data.length === 0 && (
					<p>
						Комментариев пока нет
					</p>
				)}

				{data?.map((item) => (
					<Comment {...item}/>
				))}
			</div>
		</div>
	)
}