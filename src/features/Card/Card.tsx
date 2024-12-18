import css from './Card.module.scss';
import cs from "classnames";
import {Button} from "@/components/Button";

export interface CardProps {
	title?: string;
	description?: string;
	descriptionLight?: boolean;
	topText?: string;
	variant?: 'light' | 'black' | 'transparent';
	pictureUrl?: string;
	buttonOnClick?: () => void;
	onCardClick?: () => void;
	buttonTitle?: string;
	align?: 'left' | 'right';
	size?: 'large' | 'small';
	titleWidth?: string;
	descriptionWidth?: string;
	className?: string;
	buttonClassName?: string
}

export const Card = (props: CardProps) => {
	const {
		title,
		description,
		topText,
		variant = 'white',
		pictureUrl,
		buttonOnClick,
		buttonTitle,
		align,
		size = 'small',
		titleWidth = '100%',
		descriptionWidth = '100%',
		className,
		descriptionLight,
		buttonClassName,
		onCardClick,
	} = props;

	return (
		<div
			className={cs(css.container, variant, align, size, className)}
			style={{
				backgroundImage: `url(${pictureUrl})`
			}}
			onClick={onCardClick}
		>
			<div
				className={css.content}
			>
				{topText && (
					<p className={css.topText}>{topText}</p>
				)}

				{title && (
					<p className={css.title}
					   style={{
						   maxWidth: titleWidth
					   }}
					>
						{title}
					</p>
				)}

				{description && (
					<p
						className={cs(css.description, descriptionLight && css.descriptionLight)}
						style={{
							maxWidth: descriptionWidth
						}}
					>
						{description}
					</p>
				)}

				{buttonTitle && (
					<Button
						variant={variant === 'white' ? 'white' : 'violet'}
						size="small"
						className={cs(css.button, buttonClassName)}
						onClick={buttonOnClick}
					>
						{buttonTitle}
					</Button>
				)}
			</div>
		</div>
	)
}