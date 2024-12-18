import RoundBlock from '@/components/RoundBlock';
import cl from './index.module.scss';
import ImageWrapper from '@/components/ImageWrapper';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import Arrow from '@/assets/icons/link_arrow.svg';

interface PracticeLinkProps {
    src: string;
    title: string;
    link: string;
}

const PracticeLink = ({ src, title, link }: PracticeLinkProps) => {
    return (
        <Link to={link} className={cl.link_wrapper}>
            <RoundBlock classNames={cl.practice} background="#EAECF3" typeCard="small">
                <div className={cl.visual}>
                    <ImageWrapper src={src} className={cl.visual__img} type="cover" />
                    <Typography.Title className={cl.visual__title} level={3}>
                        {title}
                    </Typography.Title>
                </div>
                <div className={cl.link}>
                    <Arrow />
                </div>
            </RoundBlock>
        </Link>
    );
};

export default PracticeLink;
