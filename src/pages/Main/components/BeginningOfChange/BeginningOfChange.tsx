import css from './BeginningOfChange.module.scss';
import {BeginningOfChangeCard} from "@/pages/Main/components/BeginningOfChangeCard";
import lesson1 from '@/assets/image/lessonBanner1.png'
import lesson2 from '@/assets/image/lessonBanner2.png'
import lesson3 from '@/assets/image/lessonBanner3.png'
import lesson4 from '@/assets/image/lessonBanner4.png'
import {useNavigate} from "react-router-dom";

export const BeginningOfChange = () => {
	const navigate = useNavigate()

	return (
		<div className={css.container}>
			<div className={css.header}>
				<p className={css.title}>Начало перемен</p>
				<p className={css.description}>Бесплатный 4-х дневный курс</p>
			</div>

			<div className={css.body}>
				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson1}
					whenOpen=''
					buttonOnClick={() => navigate(`/lesson/1`)}
					buttonTitle="Смотреть"
					className={css.card}
				/>

				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson2}
					whenOpen=''
					buttonTitle="Смотреть"
					buttonOnClick={() => navigate(`/lesson/2`)}
					className={css.card}
				/>

				<BeginningOfChangeCard
					isOpen={false}
					pictureUrl={lesson3}
					whenOpen='Скоро'
					buttonTitle="Смотреть"
					buttonOnClick={() => navigate(`/lesson/3`)}
					className={css.card}
				/>

				<BeginningOfChangeCard
					isOpen={false}
					pictureUrl={lesson4}
					whenOpen='Скоро'
					buttonTitle="Смотреть"
					buttonOnClick={() => navigate(`/lesson/4`)}
					className={css.card}
				/>
			</div>
		</div>
	);
}