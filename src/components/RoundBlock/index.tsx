import { PropsWithChildren } from 'react';
import cl from './index.module.scss';
import cs from 'classnames';

interface RoundBlockProps extends PropsWithChildren {
    typeCard?: 'big' | 'small';
    background?: string;
    classNames?: string;
}

/**
 * Компонент, который отвечает за закруглённый информотивный блок
 */
const RoundBlock: React.FC<RoundBlockProps> = ({
    children,
    classNames,
    typeCard = 'big',
    background,
}) => {
    return (
        <div
            className={cs(cl['round-block'], classNames, {
                [cl['big']]: typeCard === 'big',
                [cl['small']]: typeCard === 'small',
            })}
            style={{ background }}>
            {children}
        </div>
    );
};

export default RoundBlock;
