import React from 'react';
import { Card, Button } from '../../Components';
// import { Card, Button, Input, InputForm } from '../../Components';
import './CardForm.scss';

// const CardFormBodyNumber = () => {
//   return (
//     <InputForm
//       inputContainerClassName="card-form__body-number-container"
//       inputFormTitle="카드번호"
//       inputFormErrorMessage="error message"
//     >
//       <Input className="card-form__body-number-input" />
//       <span className="card-form__body-number-seperator">-</span>
//       <Input className="card-form__body-number-input" />
//       <span className="card-form__body-number-seperator">-</span>
//       <Input className="card-form__body-number-input" />
//       <span className="card-form__body-number-seperator">-</span>
//       <Input className="card-form__body-number-input" />
//     </InputForm>
//   );
// };

// const CardFormExpirationDate = () => {
//   return (
//     <InputForm
//       inputContainerClassName="card-form__body-expiration-date-container"
//       inputFormTitle="만료일"
//       inputFormErrorMessage="error message"
//       containerWidth="12rem"
//     >
//       <Input className="card-form__body-expiration-date-input" width="4rem" />
//       <span className="card-form__body-expiration-date-seperator">/</span>
//       <Input className="card-form__body-expiration-date-input" width="4rem" />
//     </InputForm>
//   );
// };

// const CardFormOwnerName = () => {
//   return (
//     <InputForm
//       inputContainerClassName="card-form__body-owner-name-container"
//       inputFormTitle="카드 소유자 이름(선택)"
//       inputFormErrorMessage="error message"
//     >
//       <Input className="card-form__body-owner-name-input" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
//     </InputForm>
//   );
// };

// const CardFormCVC = () => {
//   return (
//     <InputForm
//       inputContainerClassName="card-form__body-cvc-container"
//       inputFormTitle="보안 코드(CVC/CVV)"
//       inputFormErrorMessage="error message"
//     >
//       <Input className="card-form__body-cvc-input" />
//     </InputForm>
//   );
// };

// const CardFormPassword = () => {
//   return (
//     <InputForm
//       inputContainerClassName="card-form__body-password-container"
//       inputFormTitle="카드 비밀번호"
//       inputFormErrorMessage="error message"
//     >
//       {/* <Input className="card-form__body-password-input" />
//       <Input className="card-form__body-password-input" />
//       <Input className="card-form__body-password-input" />
//       <Input className="card-form__body-password-input" /> */}
//     </InputForm>
//   );
// };

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
        {/* <CardFormBodyNumber />
        <CardFormExpirationDate />
        <CardFormOwnerName />
        <CardFormCVC />
        <CardFormPassword /> */}
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
