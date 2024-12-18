import cl from './index.module.scss';
import classNames from 'classnames';

interface ImageWrapperProps {
    type?: 'cover' | 'contain';
    className?: string;
    src: string;
}

const ImageWrapper = ({ src, className, type = 'contain' }: ImageWrapperProps) => {
    return (
        <div
            className={classNames(cl.image, className, {
                [cl['contain']]: type === 'contain',
                [cl['cover']]: type === 'cover',
            })}>
            <img src={src} />
        </div>
    );
};

export default ImageWrapper;
