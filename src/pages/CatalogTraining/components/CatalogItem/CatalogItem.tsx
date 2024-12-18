import css from './CatalogItem.module.scss';

interface CatalogItemProps {
    title: string;
    date: string;
    image: string;
    color?: 'white' | 'black';
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ title, date, image, color }) => {
    const itemClass = color ? `${css.item} ${css[color]}` : css.item;

    return (
      <div className={itemClass} style={{backgroundImage: `url(${image})`}}>
        <span className={css.item__date}>{date}</span>
        <h4 className={css.item__title}>{title}</h4>
      </div>
    );
};