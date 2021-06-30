import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface ButtonOptions {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  // onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick?: any;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ className, type = 'submit', children, onClick, ...rest }: ButtonOptions) => {
  return (
    <button className={cx('holee-button', className)} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
