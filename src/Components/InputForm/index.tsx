import React, { ReactNode } from 'react';
import './InputForm.scss';
import { InputContainer } from '../InputContainer';

export interface InputFormProps {
  children?: ReactNode | undefined;
  className?: string | undefined;
  inputContainerClassName?: string | undefined;
  inputFormTitle?: string | undefined;
  inputFormErrorMessage?: string | undefined;
  containerWidth?: string | undefined;
}

export const InputForm = ({
  children,
  inputContainerClassName,
  inputFormTitle,
  inputFormErrorMessage,
  containerWidth,
}: InputFormProps) => {
  return (
    <div className="input-form">
      <div className="input-form__header">
        <label className="input-form__header-title">{inputFormTitle}</label>
        <span className="input-form__header-validation-message">{inputFormErrorMessage}</span>
      </div>
      <InputContainer className={inputContainerClassName} width={containerWidth}>
        {children}
      </InputContainer>
    </div>
  );
};
