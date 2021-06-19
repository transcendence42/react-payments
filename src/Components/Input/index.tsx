import React from 'react';
// import React, { forwardRef } from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface InputProps {
  className?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  width?: string | undefined;
  onChange?: any;
}

// const Input = forwardRef(({ className = '', placeholder = '', width = '' }: InputProps, ref: any) => {
//   return (
//     <input
//       className={cx('input-container', className)}
//       placeholder={placeholder}
//       style={{ width: `${width}` }}
//       ref={ref}
//     />
//   );
// });

// Input.displayName = 'holee-input';

const Input = ({ className = '', name = '', onChange, placeholder = '', width = '' }: InputProps) => {
  return (
    <input
      className={cx('input-container', className)}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: `${width}` }}
    />
  );
};

export { Input };
