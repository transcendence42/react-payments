import React, { useState, useEffect } from 'react';
import CardFormPresenter from './CardFormPresenter';

const data = [
  { name: 'NH농협', color: 'yellow' },
  { name: 'KB국민', color: 'orange' },
  { name: '신한', color: '#94dacd' },
  { name: '우리', color: 'skyblue' },
  { name: '하나', color: '#74bc6d' },
  { name: 'IBK기업', color: '#547ce4' },
  { name: 'SC제일', color: 'pink' },
  { name: '씨티', color: '#e24141' },
];

const CardFormContainer = () => {
  const [cardFormInputs, setCardFormInputs] = useState({
    companyName: '',
    companyColor: '',
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
    openPortal: false,
  });

  useEffect(() => {
    if (cardFormInputs.numberFirst.length === 4 && cardFormInputs.numberSecond.length === 4) {
      setCardFormInputs((prev) => ({ ...prev, openPortal: true }));
    }
    return () => {
      setCardFormInputs((prev) => ({ ...prev, openPortal: false }));
    };
  }, [cardFormInputs.numberFirst, cardFormInputs.numberSecond]);

  const handleChangeCardInfo = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement;
    setCardFormInputs((prev) => ({ ...prev, [name]: value }));
    console.log(cardFormInputs);
  };

  const handleClickCardCompanyItem = (e: any) => {
    e.persist();
    setCardFormInputs((prev) => ({
      ...prev,
      companyName: e.target.dataset.company,
      companyColor: e.target.dataset.color,
      openPortal: false,
    }));
  };
  return (
    <CardFormPresenter
      data={data}
      cardColor={cardFormInputs.companyColor}
      cardHeaderText={cardFormInputs.companyName}
      cardBodyNumberFirst={cardFormInputs.numberFirst}
      cardBodyNumberSecond={cardFormInputs.numberSecond}
      cardBodyNumberThird={cardFormInputs.numberThird}
      cardBodyNumberFourth={cardFormInputs.numberFourth}
      cardFooterMonth={cardFormInputs.expirationDateMonth}
      cardFooterYear={cardFormInputs.expirationDateYear}
      cardFooterName={cardFormInputs.ownerName}
      handleChangeCardInfo={handleChangeCardInfo}
      handleClickCardCompanyItem={handleClickCardCompanyItem}
      openPortal={cardFormInputs.openPortal}
    />
  );
};

export default CardFormContainer;
