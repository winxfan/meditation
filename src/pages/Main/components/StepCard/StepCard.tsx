import css from './StepCard.module.scss';
import {Button} from "@/components/Button";

interface StepCardProps {
	topText?: string;
	title?: string;
	description?: string;
	pictureSrc: string;
	onCardClick?: () => void;
}

export const StepCard = (props: StepCardProps) => {
	const {topText, title, description, onCardClick, pictureSrc} = props;

	return (
		<div
			className={css.container}
			style={{backgroundImage: `url(${pictureSrc})`}}
			onClick={onCardClick}
		>
			<div>
				{topText && (
					<p className={css.topText}>
						{topText}
					</p>
				)}
			</div>

			<div className={css.body}>
				{title && (
					<p className={css.title}>
						{title}
					</p>
				)}

				<p className={css.result}>
					Результат:
				</p>

				{description && (
					<p className={css.description}>
						{description}
					</p>
				)}
			</div>

			{/*<div className={css.footer}>*/}
			{/*	<Button variant="violet" size="small" onClick={onButtonClick}>*/}
			{/*		Смотреть*/}
			{/*	</Button>*/}
			{/*</div>*/}
		</div>
	);
}