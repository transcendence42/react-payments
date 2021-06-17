import React from 'react';
import Card from '../../Components/Card';
import Button from '../../Components/Button';
import './CardForm.css';

const CardFormPresenter = () => {
  return (
    <div className="card-form">
      <div className="card-form__header">
        <button className="card-form__header-button">{'<'}</button>
        <span className="card-form__header-title">카드 추가</span>
      </div>
      <div className="card-form__body">
        <Card></Card>
      </div>
      <div className="card-form__footer">
        <Button className="button-form" type="submit">
          제출 완료
        </Button>
      </div>
    </div>
  );
};

export default CardFormPresenter;
