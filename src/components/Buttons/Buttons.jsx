import React from 'react';
import css from './Buttons.module.css';

export const Buttons = ({ onGood, onNeutrals, onBad }) => {
  return (
    <div>
      <button className={css.button} type="button" onClick={onGood}>
        Good
      </button>
      <button className={css.button} type="button" onClick={onNeutrals}>
        Neutral
      </button>
      <button className={css.button} type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};
