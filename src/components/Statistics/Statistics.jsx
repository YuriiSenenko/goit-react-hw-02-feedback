import React from 'react';

export const Statistics = ({ good, neutrals, bad }) => {
  const total = countTotalFeedback({ good, neutrals, bad });
  const positiveFeedback = countPositiveFeedbackPercentage(total, good);
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutrals}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};

function countTotalFeedback({ good, neutrals, bad }) {
  return good + neutrals + bad;
}

function countPositiveFeedbackPercentage(total, good) {
  return (total / good).toFixed(1);
}
