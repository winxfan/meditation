import css from "./FeedbackCard.module.scss";

export const FeedbackCard = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>отзыв</p>
      <p className={css.text}>
        Каждый месяц вы будете получать новое звание внутри платформы и
        уникальными скетч картинками отражающими ваш прогресс. Каждый месяц вы
        будете получать новое звание внутри платформы и уникальными скетч
        картинками отражающими ваш прогресс
      </p>
      <button className={css.readMore}>Читать полностью</button>
    </div>
  );
};
