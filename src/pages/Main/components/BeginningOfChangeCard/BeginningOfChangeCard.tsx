import {Card, CardProps} from "@/features/Card";
import LockIcon from '@/assets/image/lock.svg';
import css from './BeginningOfChangeCard.module.scss';

interface BeginningOfChangeCardProps extends CardProps {
	isOpen: boolean;
	whenOpen: string;
}

export const BeginningOfChangeCard = (props: BeginningOfChangeCardProps) => {
	const {isOpen, whenOpen, ...cardProps} = props;

	if (!isOpen) {
		return (
			<div className={css.lockedContainer}>
				<LockIcon className={css.lockedIcon} />
				<p className={css.lockedTitle}>Откроется {whenOpen}</p>
			</div>
		)
	}

	return (
		<Card {...cardProps}/>
	);
}