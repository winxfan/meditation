import css from "./Energy365Item.module.scss";
import { Link } from "react-router-dom";
import React from "react";

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
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <Link to={link} onClick={handleClick} className={css.item}>
      <img src={image} alt="" />
      <p>{title}</p>
    </Link>
  );
};
