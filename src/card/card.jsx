import React from 'react';
import s from './card.module.css'

function Card(props) {
  return (

    <div className={s.card}>
      <img className={s.cardImg} alt='cake' src='https://remtorgholod.ru/upload/iblock/2ba/2ba8d1c1d79d0738052d813328e0922a.jpg' />
      <div className={s.bodyCard}>
        <h3 className={s.titleCard}>
          s8 - 7853412214
        </h3>
        <button>забронировать</button>
      </div>
    </div>
  );
}

export default Card;