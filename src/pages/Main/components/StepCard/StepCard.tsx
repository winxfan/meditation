import css from './StepCard.module.scss'
import { Button } from '@/components/Button'

interface StepCardProps {
	topText?: string
	title?: string
	description?: string
	pictureSrc: string
	onButtonClick?: () => void
}

export const StepCard = (props: StepCardProps) => {
	const { topText, title, description, onButtonClick, pictureSrc } = props

	return (
		<div
			className={css.container}
			style={{ backgroundImage: `url(${pictureSrc})` }}
		>
			<div>{topText && <p className={css.topText}>{topText}</p>}</div>

			<div className={css.body}>
				{title && <p className={css.title}>{title}</p>}

				{description && <p className={css.description}>{description}</p>}
			</div>

			<div className={css.footer}>
				<Button variant='violet' size='small' onClick={onButtonClick}>
					Смотреть
				</Button>
			</div>

			{/*<img className={css.picture} src={pictureSrc}/>*/}
		</div>
	)
}
