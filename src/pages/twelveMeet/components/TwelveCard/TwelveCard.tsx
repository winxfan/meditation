import css from "./twelveCard.module.scss";

interface TwelveCardProps {
  title: string;
  text: string;
  image: string;
}

export const TwelveCard: React.FC<TwelveCardProps> = ({
  title,
  image,
  text,
}) => {
  return (
    <div className={css.item}>
      <img src={image} alt="" />
      <div className={css.item__content}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
