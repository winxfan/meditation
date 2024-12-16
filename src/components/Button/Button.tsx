import React, {FC, ReactNode} from 'react';
import cs from 'classnames'
import css from './Button.module.scss'
import {LoadingOutlined} from "@ant-design/icons";

export interface ButtonProps {
  children: ReactNode,
  variant: 'violet' | 'white' | 'green',
  // color?: 'black' | 'white',
  size?: 'large' | 'medium' | 'small',
  fullWidth?: boolean;
  className?: string,
  isLoading?: boolean,
  isError?: boolean,
  onClick?: () => any
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    isLoading = false,
    children,
    variant = 'violet',
    size,
    className,
    fullWidth,
    onClick
  } = props;

  const onBtnClick = () => {
    if (!isLoading && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={cs(css.button, css[variant], size && css[size], className, fullWidth && css.fullWidth)}
      onClick={onBtnClick}
    >
      {isLoading
        ? <LoadingOutlined />
        : children
      }
    </button>
  );
};
