import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutrals,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutrals}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage(total, good)}%</p>
    </div>
  );
};

function countPositiveFeedbackPercentage(total, good) {
  return ((good * 100) / total).toFixed();
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutrals: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
