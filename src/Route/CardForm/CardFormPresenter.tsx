import React, { useState } from 'react';
import { Card, Button, Input, InputForm } from '../../Components';
import './CardForm.scss';

const CardFormBodyNumber = ({ onChange }: { onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-number-container"
      inputFormTitle="카드번호"
      inputFormErrorMessage="error message"
    >
      <Input className="card-form__body-number-input" name="numberFirst" onChange={onChange} placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" name="numberSecond" onChange={onChange} placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" name="numberThird" onChange={onChange} placeholder="_ _ _ _" />
      <span className="card-form__body-number-seperator">-</span>
      <Input className="card-form__body-number-input" name="numberFourth" onChange={onChange} placeholder="_ _ _ _" />
    </InputForm>
  );
};

const CardFormExpirationDate = ({ onChange }: { onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-expiration-date-container"
      inputFormTitle="만료일"
      inputFormErrorMessage="error message"
      containerWidth="5.6rem"
    >
      <Input
        className="card-form__body-expiration-date-input"
        name="expirationDateMonth"
        onChange={onChange}
        width="1.5rem"
        placeholder="MM"
      />
      <span className="card-form__body-expiration-date-seperator">/</span>
      <Input
        className="card-form__body-expiration-date-input"
        name="expirationDateYear"
        onChange={onChange}
        width="1.5rem"
        placeholder="YY"
      />
    </InputForm>
  );
};

const CardFormOwnerName = ({ onChange }: { onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-owner-name-container"
      inputFormTitle="카드 소유자 이름(선택)"
      inputFormErrorMessage="error message"
    >
      <Input
        className="card-form__body-owner-name-input"
        name="ownerName"
        onChange={onChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        width="19rem"
      />
    </InputForm>
  );
};

const CardFormCVC = ({ onChange }: { onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-cvc-container"
      inputFormTitle="보안 코드(CVC/CVV)"
      inputFormErrorMessage="error message"
      containerWidth="3.2rem"
    >
      <Input className="card-form__body-cvc-input" name="cvc" onChange={onChange} placeholder="CVC" width="2rem" />
    </InputForm>
  );
};

const CardFormPassword = ({ onChange }: { onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-password-container"
      inputFormTitle="카드 비밀번호"
      inputFormErrorMessage="error message"
      containerWidth="8.5rem"
    >
      <Input
        className="card-form__body-password-input"
        name="passwordFirst"
        onChange={onChange}
        placeholder="_"
        width="1rem"
      />
      <Input
        className="card-form__body-password-input"
        name="passwordSecond"
        onChange={onChange}
        placeholder="_"
        width="1rem"
      />
      <Input
        className="card-form__body-password-input"
        name="passwordThird"
        onChange={onChange}
        placeholder="_"
        width="1rem"
      />
      <Input
        className="card-form__body-password-input"
        name="passwordFourth"
        onChange={onChange}
        placeholder="_"
        width="1rem"
      />
    </InputForm>
  );
};

const CardFormPresenter = () => {
  const [cardFormInputs, setCardFormInputs] = useState({
    typeName: '',
    typeColor: '',
    numberFirst: '',
    numberSecond: '',
    numberThird: '',
    numberFourth: '',
    expirationDateMonth: '',
    expirationDateYear: '',
    ownerName: '',
    cvc: '',
    passwordFirst: '',
    passwordSecond: '',
    passwordThird: '',
    passwordFourth: '',
    nickname: '',
  });

  const handleChangeCardInfo = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    setCardFormInputs((prev) => ({ ...prev, [name]: value }));
    console.log(cardFormInputs);
  };

  return (
    <div className="card-form">
      <div className="card-form__header">
        <Button className="card-form__header-button" type="button">
          {'<'}
        </Button>
        <span className="card-form__header-title">카드 추가</span>
      </div>
      <div className="card-form__body">
        <Card
          cardBodyNumberFirst={cardFormInputs.numberFirst}
          cardBodyNumberSecond={cardFormInputs.numberSecond}
          cardBodyNumberThird={cardFormInputs.numberThird}
          cardBodyNumberFourth={cardFormInputs.numberFourth}
          cardFooterMonth={cardFormInputs.expirationDateMonth}
          cardFooterYear={cardFormInputs.expirationDateYear}
          cardFooterName={cardFormInputs.ownerName}
        ></Card>
        <CardFormBodyNumber onChange={handleChangeCardInfo} />
        <CardFormExpirationDate onChange={handleChangeCardInfo} />
        <CardFormOwnerName onChange={handleChangeCardInfo} />
        <CardFormCVC onChange={handleChangeCardInfo} />
        <CardFormPassword onChange={handleChangeCardInfo} />
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
