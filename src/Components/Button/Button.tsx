import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ButtonType {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button = ({ className, type = 'submit', children, ...rest }: ButtonType) => {
  return (
    <button className={cx('Button__Wrapper', className)} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
