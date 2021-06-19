import React from 'react';
import { Card, Button, Input, InputForm } from '../../Components';
import './CardForm.scss';

const CardFormBodyNumber = () => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-number-container"
      inputFormTitle="카드번호"
      inputFormErrorMessage="error message"
    >
      <Input className="card-form__body-number-input" placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" placeholder="_ _ _ _" />
    </InputForm>
  );
};

const CardFormExpirationDate = () => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-expiration-date-container"
      inputFormTitle="만료일"
      inputFormErrorMessage="error message"
      containerWidth="5.6rem"
    >
      <Input className="card-form__body-expiration-date-input" width="1.5rem" placeholder="MM" />
      <span className="card-form__body-expiration-date-seperator">/</span>
      <Input className="card-form__body-expiration-date-input" width="1.5rem" placeholder="YY" />
    </InputForm>
  );
};

const CardFormOwnerName = () => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-owner-name-container"
      inputFormTitle="카드 소유자 이름(선택)"
      inputFormErrorMessage="error message"
    >
      <Input
        className="card-form__body-owner-name-input"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        width="19rem"
      />
    </InputForm>
  );
};

const CardFormCVC = () => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-cvc-container"
      inputFormTitle="보안 코드(CVC/CVV)"
      inputFormErrorMessage="error message"
      containerWidth="3.2rem"
    >
      <Input className="card-form__body-cvc-input" placeholder="CVC" width="2rem" />
    </InputForm>
  );
};

const CardFormPassword = () => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-password-container"
      inputFormTitle="카드 비밀번호"
      inputFormErrorMessage="error message"
      containerWidth="8.5rem"
    >
      <Input className="card-form__body-password-input" placeholder="_" width="1rem" />
      <Input className="card-form__body-password-input" placeholder="_" width="1rem" />
      <Input className="card-form__body-password-input" placeholder="_" width="1rem" />
      <Input className="card-form__body-password-input" placeholder="_" width="1rem" />
    </InputForm>
  );
};

const CardFormPresenter = () => {
  return (
    <div className="card-form">
      <div className="card-form__header">
        <Button className="card-form__header-button" type="button">
          {'<'}
        </Button>
        <span className="card-form__header-title">카드 추가</span>
      </div>
      <div className="card-form__body">
        <Card></Card>
        <CardFormBodyNumber />
        <CardFormExpirationDate />
        <CardFormOwnerName />
        <CardFormCVC />
        <CardFormPassword />
      </div>
      <div className="card-form__footer">
        <Button className="card-form__footer-button" type="submit">
          제출 완료
        </Button>
      </div>
    </div>
  );
};

export default CardFormPresenter;
