import React from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const INPUT_MAXLENGTH = 1000;

export interface InputProps {
  className?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  width?: string | undefined;
  onChange?: any;
  maxLength?: number;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'datetime';
  autoFocus?: boolean;
}

const Input = React.forwardRef(
  (
    {
      className = '',
      name = '',
      onChange,
      placeholder = '',
      width = '',
      maxLength,
      type = 'text',
      ...rest
    }: InputProps,
    ref?: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        className={cx('input-container', className)}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        style={{ width: `${width}` }}
        type={type}
        maxLength={maxLength ? maxLength : INPUT_MAXLENGTH}
        {...rest}
        ref={ref ? ref : null}
      />
    );
  },
);

Input.displayName = 'holee-input';

export { Input };
