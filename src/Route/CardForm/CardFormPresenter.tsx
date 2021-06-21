import React from 'react';
import { Card, Button, Input, InputForm, Portal } from '../../Components';
import './CardForm.scss';

const CardFormBodyNumber = ({ errorMessage, onChange }: { errorMessage: string | undefined; onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-number-container"
      inputFormTitle="카드번호"
      inputFormErrorMessage={errorMessage ? errorMessage : ''}
    >
      <Input
        className="card-form__body-number-input"
        name="numberFirst"
        onChange={onChange}
        placeholder="_ _ _ _"
        maxLength={4}
      />
      <span className="card-form__body-number-seperator">-</span>
      <Input
        className="card-form__body-number-input"
        name="numberSecond"
        onChange={onChange}
        placeholder="_ _ _ _"
        maxLength={4}
      />
      <span className="card-form__body-number-seperator">-</span>
      <Input
        className="card-form__body-number-input"
        name="numberThird"
        onChange={onChange}
        placeholder="_ _ _ _"
        maxLength={4}
      />
      <span className="card-form__body-number-seperator">-</span>
      <Input
        className="card-form__body-number-input"
        name="numberFourth"
        onChange={onChange}
        placeholder="_ _ _ _"
        maxLength={4}
      />
    </InputForm>
  );
};

const CardFormExpirationDate = ({ onChange, errorMessage }: { onChange: any; errorMessage: string | undefined }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-expiration-date-container"
      inputFormTitle="만료일"
      inputFormErrorMessage={errorMessage ? errorMessage : ''}
      containerWidth="5.8rem"
    >
      <Input
        className="card-form__body-expiration-date-input"
        name="expirationDateMonth"
        onChange={onChange}
        width="1.5rem"
        placeholder="MM"
        maxLength={2}
      />
      <span className="card-form__body-expiration-date-seperator">/</span>
      <Input
        className="card-form__body-expiration-date-input"
        name="expirationDateYear"
        onChange={onChange}
        width="1.5rem"
        placeholder="YY"
        maxLength={2}
      />
    </InputForm>
  );
};

const CardFormOwnerName = ({ errorMessage, onChange }: { errorMessage: string | undefined; onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-owner-name-container"
      inputFormTitle="카드 소유자 이름(선택)"
      inputFormErrorMessage={errorMessage ? errorMessage : ''}
    >
      <Input
        className="card-form__body-owner-name-input"
        name="ownerName"
        onChange={onChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        width="19rem"
        maxLength={18}
      />
    </InputForm>
  );
};

const CardFormCVC = ({ errorMessage, onChange }: { errorMessage: string | undefined; onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-cvc-container"
      inputFormTitle="보안 코드(CVC/CVV)"
      inputFormErrorMessage={errorMessage ? errorMessage : ''}
      containerWidth="3.2rem"
    >
      <Input
        className="card-form__body-cvc-input"
        name="cvc"
        onChange={onChange}
        placeholder="CVC"
        width="2rem"
        maxLength={3}
      />
    </InputForm>
  );
};

const CardFormPassword = ({ errorMessage, onChange }: { errorMessage: string | undefined; onChange: any }) => {
  return (
    <InputForm
      inputContainerClassName="card-form__body-password-container"
      inputFormTitle="카드 비밀번호"
      inputFormErrorMessage={errorMessage ? errorMessage : ''}
      containerWidth="8.5rem"
    >
      <Input
        className="card-form__body-password-input"
        name="passwordFirst"
        onChange={onChange}
        placeholder="_"
        width="1rem"
        maxLength={1}
      />
      <Input
        className="card-form__body-password-input"
        name="passwordSecond"
        onChange={onChange}
        placeholder="_"
        width="1rem"
        maxLength={1}
      />
      <Input
        className="card-form__body-password-input"
        name="passwordThird"
        onChange={onChange}
        placeholder="_"
        width="1rem"
        maxLength={1}
      />
      <Input
        className="card-form__body-password-input"
        name="passwordFourth"
        onChange={onChange}
        placeholder="_"
        width="1rem"
        maxLength={1}
      />
    </InputForm>
  );
};

const CardCompanyItem = ({ color, name, onClick }: { color: string; name: string; onClick: any }) => {
  return (
    <div className="card-company-item">
      <button
        className="card-company-item__color"
        style={{ backgroundColor: color }}
        onClick={onClick}
        data-company={name}
        data-color={color}
      ></button>
      <p className="card-company-item__name">{name}</p>
    </div>
  );
};

interface CardModalProps {
  color: string;
  name: string;
}

const CardModal = ({ data, onClick }: { data: CardModalProps[]; onClick?: any }) => {
  return (
    <Portal>
      <div className="portal">
        <div className="card-list">
          {data.map(({ name, color }) => (
            <CardCompanyItem key={name} name={name} color={color} onClick={onClick} />
          ))}
        </div>
      </div>
    </Portal>
  );
};

interface CardFormPresenterProps {
  data: CardModalProps[];
  cardColor: string;
  cardHeaderText: string;
  cardBodyNumberFirst: string;
  cardBodyNumberSecond: string;
  cardBodyNumberThird: string;
  cardBodyNumberFourth: string;
  cardFooterMonth: string;
  cardFooterYear: string;
  cardFooterName: string;
  openPortal: boolean;
  handleChangeCardInfo: any;
  handleClickCardCompanyItem: any;
  cardBodyNumberErrorMessage?: string;
  cardFooterNameErrorMessage?: string;
  cardFooterExpirationDateErrorMessage?: string;
  cardCVCErrorMessage?: string;
  cardPasswordErrorMessage?: string;
}

const CardFormPresenter = ({
  data,
  cardColor,
  cardHeaderText,
  cardBodyNumberFirst,
  cardBodyNumberSecond,
  cardBodyNumberThird,
  cardBodyNumberFourth,
  cardFooterMonth,
  cardFooterYear,
  cardFooterName,
  openPortal,
  handleChangeCardInfo,
  handleClickCardCompanyItem,
  cardBodyNumberErrorMessage,
  cardFooterNameErrorMessage,
  cardFooterExpirationDateErrorMessage,
  cardCVCErrorMessage,
  cardPasswordErrorMessage,
}: CardFormPresenterProps) => {
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
          cardColor={cardColor}
          cardHeaderText={cardHeaderText}
          cardBodyNumberFirst={cardBodyNumberFirst}
          cardBodyNumberSecond={cardBodyNumberSecond}
          cardBodyNumberThird={cardBodyNumberThird}
          cardBodyNumberFourth={cardBodyNumberFourth}
          cardFooterMonth={cardFooterMonth}
          cardFooterYear={cardFooterYear}
          cardFooterName={cardFooterName}
        ></Card>
        <CardFormBodyNumber errorMessage={cardBodyNumberErrorMessage} onChange={handleChangeCardInfo} />
        <CardFormExpirationDate errorMessage={cardFooterExpirationDateErrorMessage} onChange={handleChangeCardInfo} />
        <CardFormOwnerName errorMessage={cardFooterNameErrorMessage} onChange={handleChangeCardInfo} />
        <CardFormCVC errorMessage={cardCVCErrorMessage} onChange={handleChangeCardInfo} />
        <CardFormPassword errorMessage={cardPasswordErrorMessage} onChange={handleChangeCardInfo} />
      </div>
      <div className="card-form__footer">
        <Button className="card-form__footer-button" type="submit">
          제출 완료
        </Button>
      </div>
      {openPortal ? <CardModal data={data} onClick={handleClickCardCompanyItem} /> : ''}
    </div>
  );
};

export default CardFormPresenter;
