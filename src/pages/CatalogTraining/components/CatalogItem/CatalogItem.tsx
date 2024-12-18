import css from "./CatalogItem.module.scss";
import { Link } from "react-router-dom";

interface CatalogItemProps {
  title: string;
  date: string;
  image: string;
  color: string;
  link: string;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({
  title,
  date,
  image,
  color,
  link,
}) => {
  const itemClass = color ? `${css.item} ${css[color]}` : css.item;

  return (
    <Link
      to={link}
      className={itemClass}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={css.item__date}>{date}</span>
      <h4 className={css.item__title}>{title}</h4>
    </Link>
  );
};
