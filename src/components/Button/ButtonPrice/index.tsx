import classNames from 'classnames';
import cl from './index.module.scss';
import { Button, ButtonProps, Typography } from 'antd';

interface ButtonPriceProps extends ButtonProps {
    label?: string;
    title: string;
    className?: string;
}

const ButtonPrice = ({ title, label, className, ...props }: ButtonPriceProps) => {
    return (
        <Button {...props} className={classNames(cl.button, className)}>
            <Typography.Text className={cl.title}>{title}</Typography.Text>
            {label && <Typography.Text className={cl.label}>{label}</Typography.Text>}
        </Button>
    );
};

export default ButtonPrice;
