import RoundBlock from '@/components/RoundBlock';
import cl from './index.module.scss';
import ImageWrapper from '@/components/ImageWrapper';
import { Link } from 'react-router-dom';
import Arrow from '@/assets/icons/link_arrow.svg';
import React from "react";

interface PracticeLinkProps {
    src: string;
    title: string;
    link: string;
}

const PracticeLink = ({ src, title, link }: PracticeLinkProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
    };

    return (
        <Link to={link} className={cl.link_wrapper} onClick={handleClick} >
            <RoundBlock classNames={cl.practice} background="#EAECF3" typeCard="small">
                <div className={cl.visual}>
                    <ImageWrapper src={src} className={cl.visual__img} type="cover" />
                    <p className={cl.visual__title}>
                        {title}
                    </p>
                </div>

                <div className={cl.link}>
                    <Arrow />
                </div>
            </RoundBlock>
        </Link>
    );
};

export default PracticeLink;
