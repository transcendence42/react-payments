import React, { ReactNode } from 'react';
import './Card.scss';

const CardHeader = ({ children }: { children: string | undefined }) => {
  return (
    <div className="card-header">
      <div className="card-header__text">{children ? children : ''}</div>
    </div>
  );
};

interface CardBodyProps {
  cardNumber?: string | undefined;
}

const chunkString = (str: string, length: number) => {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
};

const CardBody = ({ cardNumber = '' }: CardBodyProps) => {
  const cardNumberLength = cardNumber.length;
  if (cardNumberLength > 16) {
    cardNumber = cardNumber.slice(0, 8).padEnd(16, '*');
  } else if (cardNumberLength > 8) {
    cardNumber = cardNumber.slice(0, 8).padEnd(cardNumberLength, '*');
  }
  const cardNumberList = chunkString(cardNumber.padEnd(16, '_'), 4);
  return (
    <div className="card-body">
      <div className="card-body__ic-chip"></div>
      <div className="card-body__number">{cardNumberList ? cardNumberList.join('-') : ''}</div>
    </div>
  );
};

interface CardFooterProps {
  name?: string | undefined;
  month?: string | undefined;
  year?: string | undefined;
}

const CardFooter = ({ name = 'NAME', month = 'MM', year = 'YY' }: CardFooterProps) => {
  return (
    <div className="card-footer">
      <span className="card-footer__name">{name}</span>
      <span className="card-footer__expiration-date">
        {month}/{year}
      </span>
    </div>
  );
};

// type?: 'preview' | 'modify' | undefined;
export interface CardProps {
  children?: ReactNode;
  className?: string;
  onClick?: any;
  onKeyUp?: any;
  cardHeaderText?: string;
  cardBodyCardNumber?: string;
  cardFooterName?: string;
  cardFooterMonth?: string;
  cardFooterYear?: string;
}

export const Card = ({
  onClick,
  onKeyUp,
  cardHeaderText,
  cardBodyCardNumber,
  cardFooterName,
  cardFooterMonth,
  cardFooterYear,
  ...rest
}: CardProps) => {
  return (
    <div className="card" onClick={onClick} role="button" tabIndex={0} onKeyUp={onKeyUp} {...rest}>
      <CardHeader>{cardHeaderText}</CardHeader>
      <CardBody cardNumber={cardBodyCardNumber}></CardBody>
      <CardFooter name={cardFooterName} month={cardFooterMonth} year={cardFooterYear}></CardFooter>
    </div>
  );
};
