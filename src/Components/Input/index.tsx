// import React, { forwardRef } from 'react';
// import styles from './Input.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

export interface InputProps {
  className?: string | undefined;
  placeholder?: string | undefined;
  width?: string | undefined;
}

// export const Input = forwardRef(({ className = '', placeholder = '', width = '' }: InputProps, ref: any) => {
//   return (
//     <input
//       className={cx('input-container', className)}
//       placeholder={placeholder}
//       style={{ width: `${width}` }}
//       ref={ref}
//     />
//   );
// });
