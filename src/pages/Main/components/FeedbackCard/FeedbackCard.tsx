import css from './FeedbackCard.module.scss';
import {useState} from "react";

interface FeedbackCardProps {
	description: string
}

export const FeedbackCard = (props: FeedbackCardProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const expand = () => setIsExpanded(true);

	const isExceeded = props.description.length > 200;
	const formattedDescription = !isExpanded ? props.description.slice(0, 200) : props.description;

	return (
		<div className={css.container}>
			<div>
				<p className={css.title}>отзыв</p>
			</div>

			<div className={css.body}>
				<p className={css.title}>
					{formattedDescription}
				</p>
			</div>

			{(isExceeded && !isExpanded) && (
				<div className={css.footer}>
					<button className={css.readMore} onClick={expand}>
						Читать полностью
					</button>
				</div>
			)}
		</div>
	)
}