import React from 'react';
import Card from '../../Components/Card';

const CardFormPresenter = () => {
  return (
    <div className="CardForm">
      <div className="Title">
        <button className="Button Button--backward">{'<'}</button>
        <h2 className="Title__text">카드 추가</h2>
      </div>
      <Card></Card>
    </div>
  );
};

export default CardFormPresenter;
