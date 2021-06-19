import React from 'react';
import CardFormPresenter from './CardFormPresenter';

const CardFormContainer = () => {
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

  return <CardFormPresenter data={data} />;
};

export default CardFormContainer;
