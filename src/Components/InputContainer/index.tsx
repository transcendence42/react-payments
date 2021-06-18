import React, { ReactNode } from 'react';
import './InputContainer.scss';

export interface InputContainerProps {
  children?: ReactNode | undefined;
  className?: string | undefined;
  width?: string | undefined;
}

export const InputContainer = ({ children, className, width = '100%' }: InputContainerProps) => {
  return (
    <div className={`input-container ${className}`} style={{ width: `${width}` }}>
      {children}
    </div>
  );
};
