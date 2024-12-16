import css from './BeginningOfChange.module.scss';
import {BeginningOfChangeCard} from "@/pages/Main/components/BeginningOfChangeCard";
import lesson1 from '@/assets/image/lesson1.jpg'
import lesson2 from '@/assets/image/lesson2.jpg'
import lesson3 from '@/assets/image/lesson3.jpg'
import lesson4 from '@/assets/image/lesson4.jpg'

export const BeginningOfChange = () => {
	return (
		<div className={css.container}>
			<div className={css.header}>
				<p className={css.title}>Начало перемен</p>
				<p className={css.description}>Бесплатный 4-х дневный курс</p>
			</div>

			<div className={css.body}>
				<BeginningOfChangeCard
					topText="Урок 1"
					description="Цена перемен: как
					я потерял 50 миллионов
					и нашёл путь к новой реальности"
					isOpen={true}
					pictureUrl={lesson1}
					whenOpen=''
					// buttonOnClick='link'
					buttonTitle="Смотреть"
				/>

				<BeginningOfChangeCard
					topText="Урок 2"
					description="Внутренние барьеры: что удерживает вас
от новой жизни "
					isOpen={false}
					pictureUrl={lesson2}
					whenOpen='25 октября'
					buttonTitle="Смотреть"
				/>

				<BeginningOfChangeCard
					topText="Урок 3"
					description="Освобождение
от прошлого:
как перестать тянуть боль
за собой"
					isOpen={false}
					pictureUrl={lesson3}
					whenOpen='25 октября'
					buttonTitle="Смотреть"
				/>

				<BeginningOfChangeCard
					topText="Урок 4"
					description="12 шагов
к кардинальным переменам
в жизни"
					isOpen={false}
					pictureUrl={lesson4}
					whenOpen='25 октября'
					buttonTitle="Смотреть"
				/>
			</div>
		</div>
	);
}