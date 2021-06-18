import React from 'react';
import { Card, Button } from '../../Components';
import './CardForm.css';

const hi = () => {
  console.log('hi');
};

const CardFormPresenter = () => {
  return (
    <div className="card-form">
      <div className="card-form__header">
        <Button className="card-form__header-button" type="button" onClick={hi}>
          {'<'}
        </Button>
        <span className="card-form__header-title">카드 추가</span>
      </div>
      <div className="card-form__body">
        <Card onClick={hi}></Card>
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
