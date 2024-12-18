import css from "./Energy365Item.module.scss";
import { Link } from "react-router-dom";

interface Energy365ItemProps {
  title: string;
  image: string;
  link: string;
}

export const Energy365Item: React.FC<Energy365ItemProps> = ({
  title,
  image,
  link,
}) => {
  return (
    <Link to={link} className={css.item}>
      <img src={image} alt="" />
      <p>{title}</p>
    </Link>
  );
};
