import css from './Meditation.module.scss';
import {useNavigate} from "react-router-dom";

interface MeditationProps {
	topText: string;
	title: string;
	description: string;
	pictureSrc: string;
}

export const Meditation = (props: MeditationProps) => {
	const {topText, title, pictureSrc, description} = props;
	const navigate = useNavigate();

	return (
		<div
			className={css.container}
			style={{backgroundImage: `url(${pictureSrc})`}}
			onClick={() => navigate('/practices/1/1')}
		>
			<p className={css.topText}>
				{topText}
			</p>

			<b className={css.title}>
				{title}
			</b>

			<p className={css.description}>
				{description}
			</p>
		</div>
	)
}