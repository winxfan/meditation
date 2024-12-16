import css from './FeedbackCard.module.scss';

export const FeedbackCard = () => {

	return (
		<div className={css.container}>
			<div>
				<p className={css.title}>отзыв</p>
			</div>

			<div className={css.body}>
				<p className={css.title}>
					Каждый месяц вы будете получать новое звание внутри платформы и уникальными скетч картинками отражающими ваш прогресс
				</p>
			</div>

			<div className={css.footer}>
				<button className={css.readMore}>
					Читать полностью
				</button>
			</div>
		</div>
	)
}