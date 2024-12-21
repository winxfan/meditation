import css from './Card.module.scss';
import cs from "classnames";
import {Button} from "@/components/Button";
import {ReactNode} from "react";

export interface CardProps {
	title?: string | ReactNode;
	description?: string | ReactNode;
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
		titleWidth,
		descriptionWidth ,
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
					<p className={css.topText}>
						{topText}
					</p>
				)}

				{title && (
					<b className={css.title}
					   style={{
						   maxWidth: titleWidth
					   }}>
						{title}
					</b>
				)}

				{description && (
					<p
						className={cs(css.description, descriptionLight && css.descriptionLight)}
					>
						{description}
					</p>
				)}

				{buttonTitle && (
					<Button
						variant={variant === 'white' ? 'white' : 'violet'}
						size="medium"
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