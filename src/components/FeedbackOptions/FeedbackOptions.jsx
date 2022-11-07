import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(name => {
        return (
          <button
            key={name}
            name={name}
            className={css.button}
            type="button"
            onClick={onLeaveFeedback}
          >
            {name[0].toUpperCase() + name.substring(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
