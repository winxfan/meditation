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
				<p className={css.title}>Начало Перемен</p>
				<p className={css.description}>Бесплатный 4-х дневный курс</p>
			</div>

			<p className={css.bottomText}>
				Трансформационный сериал из 4-х частей
			</p>

			<div className={css.body}>
				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson1}
					whenOpen=''
					onCardClick={() => navigate(`/lesson/1`)}
					// buttonTitle="Смотреть"
					className={css.card}
					topText="ЧАСТЬ 1"
					description="Цена перемен: как
я потерял 50 миллионов и нашёл путь к новой реальности"
				/>

				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson2}
					whenOpen=''
					// buttonTitle="Смотреть"
					onCardClick={() => navigate(`/lesson/2`)}
					className={css.card}
					topText="ЧАСТЬ 2"
					description="Внутренние барьеры: что удерживает вас
от новой жизни "
				/>

				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson3}
					whenOpen=''
					// buttonTitle="Смотреть"
					onCardClick={() => navigate(`/lesson/3`)}
					className={css.card}
					topText="ЧАСТЬ 3"
					description="Освобождение
от прошлого:
как перестать тянуть боль
за собой"
				/>

				<BeginningOfChangeCard
					isOpen={true}
					pictureUrl={lesson4}
					whenOpen=''
					// buttonTitle="Смотреть"
					onCardClick={() => navigate(`/lesson/4`)}
					className={css.card}
					topText="ЧАСТЬ 4"
					variant="black"
					description="
					12 шагов
к кардинальным переменам
в жизни"
				/>
			</div>
		</div>
	);
}