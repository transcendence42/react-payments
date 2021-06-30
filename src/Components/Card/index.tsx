import React, { ReactNode } from 'react';
import './Card.scss';

const CardHeader = ({ children }: { children: string | undefined }) => {
  return (
    <div className="card-header">
      <div className="card-header__text">{children ? children : ''} 카드</div>
    </div>
  );
};

interface CardBodyProps {
  cardBodyNumberFirst: string | undefined;
  cardBodyNumberSecond: string | undefined;
  cardBodyNumberThird: string | undefined;
  cardBodyNumberFourth: string | undefined;
}

const CardBody = ({
  cardBodyNumberFirst = '',
  cardBodyNumberSecond = '',
  cardBodyNumberThird = '',
  cardBodyNumberFourth = '',
}: CardBodyProps) => {
  return (
    <div className="card-body">
      <div className="card-body__ic-chip"></div>
      <div className="card-body__number">
        {[
          cardBodyNumberFirst.padEnd(4, '_'),
          '-',
          cardBodyNumberSecond.padEnd(4, '_'),
          '-',
          '*'.repeat(cardBodyNumberThird.length).padEnd(4, '_'),
          '-',
          '*'.repeat(cardBodyNumberFourth.length).padEnd(4, '_'),
        ].join('')}
      </div>
    </div>
  );
};

interface CardFooterProps {
  name: string | undefined;
  month: string | undefined;
  year: string | undefined;
}

const CardFooter = ({ name, month, year }: CardFooterProps) => {
  return (
    <div className="card-footer">
      <span className="card-footer__name">{name ? name.toUpperCase() : 'NAME'}</span>
      <span className="card-footer__expiration-date">
        {month ? month : 'MM'}/{year ? year : 'YY'}
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
  cardColor: string;
  cardHeaderText?: string;
  cardBodyNumberFirst: string | undefined;
  cardBodyNumberSecond: string | undefined;
  cardBodyNumberThird: string | undefined;
  cardBodyNumberFourth: string | undefined;
  cardFooterName: string | undefined;
  cardFooterMonth: string | undefined;
  cardFooterYear: string | undefined;
}

export const Card = ({
  onClick,
  onKeyUp,
  cardColor,
  cardHeaderText,
  cardBodyNumberFirst,
  cardBodyNumberSecond,
  cardBodyNumberThird,
  cardBodyNumberFourth,
  cardFooterName,
  cardFooterMonth,
  cardFooterYear,
  ...rest
}: CardProps) => {
  const color = cardColor ? cardColor : '#d2d2d2';
  return (
    <div
      className="card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyUp={onKeyUp}
      style={{ backgroundColor: color }}
      {...rest}
    >
      <CardHeader>{cardHeaderText}</CardHeader>
      <CardBody
        cardBodyNumberFirst={cardBodyNumberFirst}
        cardBodyNumberSecond={cardBodyNumberSecond}
        cardBodyNumberThird={cardBodyNumberThird}
        cardBodyNumberFourth={cardBodyNumberFourth}
      ></CardBody>
      <CardFooter name={cardFooterName} month={cardFooterMonth} year={cardFooterYear}></CardFooter>
    </div>
  );
};
