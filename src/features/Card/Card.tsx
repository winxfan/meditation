import css from './Card.module.scss';
import cs from "classnames";
import {Button} from "@/components/Button";

export interface CardProps {
	title?: string;
	description?: string;
	topText?: string;
	variant?: 'light' | 'black' | 'transparent';
	pictureUrl?: string;
	buttonOnClick?: () => void;
	buttonTitle?: string;
	align?: 'left' | 'right';
	size?: 'large' | 'small';
	contentWidth?: string;
	className?: string;
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
		contentWidth = '100%',
		className,
	} = props;

	return (
		<div
			className={cs(css.container, variant, align, size, className)}
			style={{
				backgroundImage: `url(${pictureUrl})`
			}}
		>
			<div
				className={css.content}
				style={{
					maxWidth: contentWidth
				}}
			>
				{topText && (
					<p className={css.topText}>{topText}</p>
				)}

				{title && (
					<p className={css.title}>{title}</p>
				)}

				{description && (
					<p className={css.description}>{description}</p>
				)}

				{buttonTitle && (
					<Button
						variant={variant === 'white' ? 'white' : 'violet'}
						size="small"
						className={css.button}
						onClick={buttonOnClick}
					>
						{buttonTitle}
					</Button>
				)}
			</div>
		</div>
	)
}