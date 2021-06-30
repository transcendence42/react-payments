import React, { useState, useEffect, useRef } from 'react';
import CardFormPresenter from './CardFormPresenter';
import {
  CARD_EXPIRATION_DATE_MAX_LENGTH,
  CARD_NUMBER_MAX_LENGTH,
  CARD_OWNER_NAME_MAX_LENGTH,
  CARD_PASSWORD_MAX_LENGTH,
  CARD_CVC_MAX_LENGTH,
  ERROR,
} from '../../Constants';

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
    errorMessage: {
      numberFirst: ERROR.VOID_INPUT,
      numberSecond: ERROR.VOID_INPUT,
      numberThird: ERROR.VOID_INPUT,
      numberFourth: ERROR.VOID_INPUT,
      expirationDateMonth: ERROR.VOID_INPUT,
      expirationDateYear: ERROR.VOID_INPUT,
      ownerName: ERROR.VOID_INPUT,
      cvc: ERROR.VOID_INPUT,
      passwordFirst: ERROR.VOID_INPUT,
      passwordSecond: ERROR.VOID_INPUT,
      passwordThird: ERROR.VOID_INPUT,
      passwordFourth: ERROR.VOID_INPUT,
    },
  });

  const refNumberFirst = useRef<HTMLInputElement>(null);
  const refNumberSecond = useRef<HTMLInputElement>(null);
  const refNumberThird = useRef<HTMLInputElement>(null);
  const refNumberFourth = useRef<HTMLInputElement>(null);
  const refExpirationDateMonth = useRef<HTMLInputElement>(null);
  const refExpirationDateYear = useRef<HTMLInputElement>(null);
  const refOwnerName = useRef<HTMLInputElement>(null);
  const refCvc = useRef<HTMLInputElement>(null);
  const refPasswordFirst = useRef<HTMLInputElement>(null);
  const refPasswordSecond = useRef<HTMLInputElement>(null);
  const refPasswordThird = useRef<HTMLInputElement>(null);
  const refPasswordFourth = useRef<HTMLInputElement>(null);

  const nextRef: { [key: string]: React.MutableRefObject<HTMLInputElement | null> } = {
    numberFirst: refNumberSecond,
    numberSecond: refNumberThird,
    numberThird: refNumberFourth,
    numberFourth: refExpirationDateMonth,
    expirationDateMonth: refExpirationDateYear,
    expirationDateYear: refOwnerName,
    ownerName: refCvc,
    cvc: refPasswordFirst,
    passwordFirst: refPasswordSecond,
    passwordSecond: refPasswordThird,
    passwordThird: refPasswordFourth,
  };

  useEffect(() => {
    if (refNumberFirst.current) {
      refNumberFirst.current.focus();
    }
  }, []);

  useEffect(() => {
    if (cardFormInputs.numberFirst.length === 4 && cardFormInputs.numberSecond.length === 4) {
      setCardFormInputs((prev) => ({ ...prev, openPortal: true }));
    }
    return () => {
      setCardFormInputs((prev) => ({ ...prev, openPortal: false }));
    };
  }, [cardFormInputs.numberFirst, cardFormInputs.numberSecond]);

  const changeCurrentInput = (target: HTMLInputElement, value: string) => {
    target.value = value;
  };

  const checkErrorMessage = (name: string, value: string): string => {
    // const { numberFirst, numberSecond, numberThird, numberFourth } = cardFormInputs;
    switch (name) {
      case 'numberFirst':
      case 'numberSecond':
      case 'numberThird':
      case 'numberFourth':
        break;
      case 'expirationDateMonth':
      case 'expirationDateYear':
        if (name === 'expirationDateMonth' && (0 >= Number(value) || 12 < Number(value))) {
          return ERROR.INVALID_EXPIRATION_DATE_MONTH;
        }
        break;
      case 'cvc':
        break;
      case 'passwordFirst':
        break;
      case 'passwordSecond':
        break;
      case 'passwordThird':
        break;
      case 'passwordFourth':
        break;
      default:
        return '';
    }
    return '';
  };

  const moveInputFocus = (
    value: string,
    name: string,
    nextRef: { [key: string]: React.MutableRefObject<HTMLInputElement | null> },
    maxLength: number,
  ) => {
    if (value.length === maxLength) {
      if (nextRef[name]) {
        nextRef[name].current!.focus();
      }
    }
  };

  const checkValidIntegerInput = (value: string) => {
    return Number.isSafeInteger(Number(value)) && Number(value) > 0;
  };

  const checkValidStringInput = (value: string) => {
    return /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/.test(value);
  };

  const handleChangeCardInfo = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { value, name } = target;
    const prevValue = value.substring(0, value.length - 1);

    if (['numberFirst', 'numberSecond', 'numberThird', 'numberFourth'].includes(name)) {
      if (!checkValidIntegerInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      moveInputFocus(value, name, nextRef, CARD_NUMBER_MAX_LENGTH);
    } else if (['cvc'].includes(name)) {
      if (!checkValidIntegerInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      moveInputFocus(value, name, nextRef, CARD_CVC_MAX_LENGTH);
    } else if (['expirationDateMonth'].includes(name)) {
      if (!checkValidIntegerInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      moveInputFocus(value, name, nextRef, CARD_EXPIRATION_DATE_MAX_LENGTH);
    } else if (['expirationDateYear'].includes(name)) {
      if (!checkValidIntegerInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      moveInputFocus(value, name, nextRef, CARD_EXPIRATION_DATE_MAX_LENGTH);
    } else if (['ownerName'].includes(name)) {
      if (!checkValidStringInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      changeCurrentInput(target, value.toUpperCase());
      moveInputFocus(value, name, nextRef, CARD_OWNER_NAME_MAX_LENGTH);
    } else if (['passwordFirst', 'passwordSecond', 'passwordThird', 'passwordFourth'].includes(name)) {
      if (!checkValidIntegerInput(value)) {
        changeCurrentInput(target, prevValue);
        setCardFormInputs((prev) => ({ ...prev, [name]: prevValue }));
        return;
      }
      if (target.value.length === 1) {
        target.value = '*';
      }
      moveInputFocus(value, name, nextRef, CARD_PASSWORD_MAX_LENGTH);
    }
    setCardFormInputs((prev) => ({
      ...prev,
      [name]: value,
      errorMessage: { ...prev.errorMessage, [name]: checkErrorMessage(name, value) },
    }));
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
    <>
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
        cardBodyNumberErrorMessage={cardFormInputs.errorMessage.numberFirst}
        cardFooterNameErrorMessage={cardFormInputs.errorMessage.ownerName}
        cardFooterExpirationDateErrorMessage={cardFormInputs.errorMessage.expirationDateMonth}
        cardCVCErrorMessage={cardFormInputs.errorMessage.cvc}
        cardPasswordErrorMessage={cardFormInputs.errorMessage.passwordFirst}
        refNumberFirst={refNumberFirst}
        refNumberSecond={refNumberSecond}
        refNumberThird={refNumberThird}
        refNumberFourth={refNumberFourth}
        refExpirationDateMonth={refExpirationDateMonth}
        refExpirationDateYear={refExpirationDateYear}
        refOwnerName={refOwnerName}
        refCvc={refCvc}
        refPasswordFirst={refPasswordFirst}
        refPasswordSecond={refPasswordSecond}
        refPasswordThird={refPasswordThird}
        refPasswordFourth={refPasswordFourth}
      />
      {/* <input placeholder="test" ref={refNumberFirst} /> */}
    </>
  );
};

export default CardFormContainer;
