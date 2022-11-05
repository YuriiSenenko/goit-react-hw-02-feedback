import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onGood, onNeutrals, onBad }) => {
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

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutrals: PropTypes.func,
  onBad: PropTypes.func,
};
