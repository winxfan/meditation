import css from './StepCard.module.scss';
import {Button} from "@/components/Button";

export const StepCard = () => {
	return (
		<div className={css.container}>
			<div>
				<p className={css.topText}>шаг 2</p>
			</div>

			<div className={css.body}>
				<p className={css.title}>
					Тонкие законы реальности: <br/> настройка на ваши мечты
				</p>

				<p className={css.description}>
					Результат:<br/>
					Вдохновение и внутренний импульс <br/>
					для выхода на новый финансовый <br/>
					и личностный уровень.
				</p>
			</div>

			<div className={css.footer}>
				<Button variant="violet" size="small">
					Смотреть
				</Button>
			</div>

			{/*<image className={css.picture} src={picture as any}/>*/}
		</div>
	);
}